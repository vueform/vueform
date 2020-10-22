import _ from 'lodash'
import moment from 'moment'
import axios from './services/axios'
import validation from './services/validation'
import messageBag from './services/messageBag'
import autosize from './services/autosize'
import location from './services/location'
import condition from './services/condition'
import i18n from './services/i18n'
import applyExtensions from './utils/applyExtensions'
import store from './store'
import vRef from './directives/ref'
import vHtmlIf from './directives/html-if'
import init from './init'

if (window._ === undefined) {
  window._ = _
}

if (window.moment === undefined) {
  window.moment = moment
}

export default function(config) {
  const Laraform = class {
    constructor() {
      this.options = Object.assign({}, config, {
        services: {
          validation,
          axios,
          messageBag,
          autosize,
          location,
          condition,
        }
      })
    }

    store(Store) {
      Store.registerModule('laraform', store)
    }

    locale(locale) {
      this.options.locale = locale
    }

    config(config) {
      // merge
      _.each([
        'extensions', 'themes', 'locales', 'languages',
        'elements', 'components', 'rules', 'services',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = Object.assign({}, this.config[attr], config[attr])
          }
      })

      // deep merge
      _.each([
        'endpoints'
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = _.merge({}, this.options[attr], config[attr])
          }
      })
      
      // replace
      _.each([
        'theme', 'locale', 'language', 'labels',
        'columns', 'validateOn', 'method', 'vue',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = config[attr]
          }
      })

      if (config.store) {
        this.store(config.store)
      }
    }

    applyExtensions() {
      _.each(this.options.themes, (theme) => {
        _.each(Object.assign({}, theme.components, theme.elements), (component, name) => {
          applyExtensions(component, name, this.options.extensions)
        })
      })
    }

    initI18n() {
      this.options.i18n = this.options.i18n || new i18n(this.options)
    }

    initComponents() {
      _.each(this.options.themes, (theme) => {
        _.each(Object.assign({}, theme.components, theme.elements), (component, name) => {
          if (!component.mixins || component.mixins[0].init === undefined) {
            return
          }

          let data = component.data ? component.data() : {}

          component.setup = (props, context) => init(props, context, component.mixins[0], data)
        })
      })
    }

    install(appOrVue, options) {
      if (options) {
        this.config(options)
      }

      this.initI18n()

      if (this.options.extensions && this.options.extensions.length) {
        this.applyExtensions()
      }

      this.initComponents()

      switch (this.options.vue) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor']

          const $laraform = this.options

          appOrVue.directive('ref', vRef)
          appOrVue.directive('html-if', vHtmlIf)

          appOrVue.mixin({
            methods: {
              __: (expr, data) => this.options.i18n.$t(expr, data)
            },
            beforeCreate() {
              this.$laraform = appOrVue.observable($laraform)
            }
          })
          break

        case 3:
          appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1

          appOrVue.config.globalProperties.$laraform = this.options

          appOrVue.directive('ref', vRef)
          appOrVue.directive('html-if', vHtmlIf)

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

  return new Laraform()
}