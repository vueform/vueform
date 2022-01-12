import 'regenerator-runtime/runtime'
import _ from 'lodash'
import flatten from 'flat'

import axios from './services/axios/index'
import validation from './services/validation/index'
import messageBag from './services/messageBag/index'
import autosize from './services/autosize/index'
import location from './services/location/index'
import condition from './services/condition/index'
import i18n from './services/i18n/index'
import columns from './services/columns/index'
import { ref } from 'composition-api'

export default function(config, components) {
  const Vueform = class {
    constructor() {
      this.options = {
        config: _.omit(config, [
          'theme', 'templates', 'locales', 'rules',
        ]),
        templates: config.templates || {},
        theme: config.theme || {},
        rules: config.rules || {},
        locales: config.locales || {},
        services: {
          validation,
          axios,
          messageBag,
          autosize,
          location,
          condition,
          columns,
        }
      }
    }

    config(config) {
      // merge
      _.each([
        'theme', 'templates', 'locales', 'rules',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = Object.assign({}, this.options[attr], config[attr])
          }
      })

      // merge (config)
      _.each([
        'languages', 'services', 'addClasses', 'removeClasses',
        'replaceClasses', 'overrideClasses', 'presets',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = Object.assign({}, this.options.config[attr], config[attr])
          }
      })

      // deep merge
      _.each([
        'endpoints',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr])
          }
      })
      
      // replace
      _.each([
        'columns', 'forceLabels', 'displayErrors', 'floatPlaceholders', 'displayErrors', 'displayMessages',
        'language', 'locale', 'fallbackLocale', 'orderFrom', 'validateOn', 'formData', 'beforeSend', 'axios',
        'locationProvider', 'classHelpers', 'env', 'usePresets',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = config[attr]
          }
      })

      // Adding elements to theme components
      if (config.elements !== undefined) {
        this.options.theme.components = {
          ...this.options.theme.components,
        }

        Object.values(config.elements).forEach((element) => {
          this.options.theme.components = {
            ...this.options.theme.components,
            ...element.components,
          }
        })
      }
    }

    registerComponents(appOrVue) {
      _.each(components, (comp, name) => {
        const component = {...comp}

        component.setup = (props, context) => {
          context = Object.assign({}, context, {
            name: ref(name),
            emits: component.emits,
          })

          return comp.setup(props, context)
        }

        component.components = this.options.theme.templates[name].components || {}

        component.render = function() {
          return this.templates[name].render.apply(this, arguments)
          return this.view && this.templates[`${name}_${this.view}`]
            ? this.templates[`${name}_${this.view}`].render.apply(this, arguments)
            : this.templates[name].render.apply(this, arguments)
        }

        component.staticRenderFns = function() {
          return this.templates[name].staticRenderFns
          return this.view && this.templates[`${name}_${this.view}`]
            ? this.templates[`${name}_${this.view}`].staticRenderFns
            : this.templates[name].staticRenderFns
        }

        appOrVue.component(name, component)
      })
    }

    initAxios() {
      const $axios = this.options.services.axios
      const axiosConfig = this.options.config.axios
      const axiosConfigFlat = flatten(this.options.config.axios)

      Object.keys(axiosConfigFlat).forEach((key) => {
        const value = axiosConfigFlat[key]

        if (['onUnauthenticated'].indexOf(key) === -1 && key.indexOf('csrfRequest.') === -1) {
          _.set($axios.defaults, key, value)
        }
      })

      $axios.interceptors.response.use(r => r, (error) => {
        if (!error.response) {
          return Promise.reject(error)
        }

        return new Promise((resolve, reject) => {
          const response = error.response
          const originalRequest = response.config

          if ([401, 419].indexOf(error.response.status) !== -1) {
            if (axiosConfig.csrfRequest && !originalRequest.CSRF) {
              $axios.request({
                ...axiosConfig.csrfRequest,
                CSRF: true,
              }).then(() => {
                resolve($axios.request({...originalRequest, CSRF: true }))
              }).catch((error) => {
                reject(error)
              })
            } else if (axiosConfig.onUnauthenticated) {
              axiosConfig.onUnauthenticated()
            } else {
              reject(error)
            }
          } else {
            reject(error)
          }
        })
      })
    }

    initI18n() {
      this.options.i18n = new i18n({
        locales: this.options.locales,
        locale: this.options.config.locale,
        fallbackLocale: this.options.config.fallbackLocale,
      })
    }

    install(appOrVue, options) {
      const version = parseInt(appOrVue.version.split('.')[0])

      if (options) {
        this.config(options)
      }

      this.initAxios()
      this.initI18n()
      this.registerComponents(appOrVue)

      switch (version) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor']
          appOrVue.config.unwrapInjectedRef = true

          const $vueform = this.options

          if (!appOrVue.__VUEFORM__) {
            appOrVue.__VUEFORM__ = true
            appOrVue.mixin({
              data() {
                return {
                  $vueform: {},
                }
              },
              methods: {
                __: (expr, data) => this.options.i18n.$t(expr, data),
              },
              beforeCreate() {
                // might exist as test mock
                if (!this.$vueform) {
                  this.$vueform = {
                    config: appOrVue.observable($vueform.config),
                    templates: $vueform.templates,
                    rules: $vueform.rules,
                    services: $vueform.services,
                    theme: $vueform.theme,
                  }
                }
              }
            })
          }
          break

        case 3:
          appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1
          appOrVue.config.compilerOptions.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1

          appOrVue.config.unwrapInjectedRef = true
          appOrVue.config.globalProperties.$vueform = this.options
          appOrVue.provide('$vueform', this.options)

          appOrVue.mixin({
            methods: {
              $set(obj, key, value) {
                obj[key] = value
              },
              $delete(obj, key) {
                delete obj[key]
              },
              __: (expr, data) => this.options.i18n.$t(expr, data)
            },
          })
          break
      }
    }
  }

  return new Vueform()
}