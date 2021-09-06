import _ from 'lodash'
import flatten from 'flat'
import axios from './services/axios'
import validation from './services/validation'
import messageBag from './services/messageBag'
import autosize from './services/autosize'
import location from './services/location'
import condition from './services/condition'
import i18n from './services/i18n'
import columns from './services/columns'
import { reactive, ref } from 'composition-api'

import AddressElement from './components/elements/AddressElement'
import ButtonElement from './components/elements/ButtonElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
import DateElement from './components/elements/DateElement'
import DatesElement from './components/elements/DatesElement'
import FileElement from './components/elements/FileElement'
import GroupElement from './components/elements/GroupElement'
import HiddenElement from './components/elements/HiddenElement'
import ListElement from './components/elements/ListElement'
import LocationElement from './components/elements/LocationElement'
import MultifileElement from './components/elements/MultifileElement'
import MultiselectElement from './components/elements/MultiselectElement'
import ObjectElement from './components/elements/ObjectElement'
import RadioElement from './components/elements/RadioElement'
import RadiogroupElement from './components/elements/RadiogroupElement'
import SelectElement from './components/elements/SelectElement'
import SliderElement from './components/elements/SliderElement'
import StaticElement from './components/elements/StaticElement'
import TagsElement from './components/elements/TagsElement'
import TextareaElement from './components/elements/TextareaElement'
import TextElement from './components/elements/TextElement'
import ToggleElement from './components/elements/ToggleElement'
import TrixElement from './components/elements/TrixElement'
import TTextareaElement from './components/elements/TTextareaElement'
import TTextElement from './components/elements/TTextElement'
import TTrixElement from './components/elements/TTrixElement'

import Laraform from './components/Laraform'
import FormErrors from './components/FormErrors'
import FormMessages from './components/FormMessages'
import FormLanguages from './components/FormLanguages'
import FormLanguage from './components/FormLanguage'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormSteps from './components/FormSteps'
import FormStepsControls from './components/FormStepsControls'
import FormStepsControl from './components/FormStepsControl'
import FormStep from './components/FormStep'
import FormElements from './components/FormElements'
import ElementLayout from './components/ElementLayout'
import ElementLayoutInline from './components/ElementLayoutInline'
import ElementLoader from './components/ElementLoader'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementInfo from './components/ElementInfo'
import ElementDescription from './components/ElementDescription'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'
import ElementText from './components/ElementText'
import DragAndDrop from './components/DragAndDrop'
import ElementAddon from './components/ElementAddon'

import FlatpickrWrapper from './components/wrappers/FlatpickrWrapper'
import TrixWrapper from './components/wrappers/TrixWrapper'

import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'
import FileSlotFilePreview from './components/elements/slots/FileSlotFilePreview'
import FileSlotImagePreview from './components/elements/slots/FileSlotImagePreview'
import FileSlotGalleryPreview from './components/elements/slots/FileSlotGalleryPreview'
import MultiselectSlotNoOptions from './components/elements/slots/MultiselectSlotNoOptions'
import MultiselectSlotNoResults from './components/elements/slots/MultiselectSlotNoResults'
import MultiselectSlotOption from './components/elements/slots/MultiselectSlotOption'
import MultiselectSlotMultipleLabel from './components/elements/slots/MultiselectSlotMultipleLabel'
import MultiselectSlotSingleLabel from './components/elements/slots/MultiselectSlotSingleLabel'
import MultiselectSlotTag from './components/elements/slots/MultiselectSlotTag'
import RadiogroupSlotRadio from './components/elements/slots/RadiogroupSlotRadio'

const elements = {
  AddressElement,
  ButtonElement,
  CheckboxElement,
  CheckboxgroupElement,
  DateElement,
  DatesElement,
  FileElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MultifileElement,
  MultiselectElement,
  ObjectElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  SliderElement,
  StaticElement,
  TagsElement,
  TextareaElement,
  TextElement,
  ToggleElement,
  TrixElement,
  TTextareaElement,
  TTextElement,
  TTrixElement,
}

const components = {
  Laraform,
  FormErrors,
  FormMessages,
  FormLanguages,
  FormLanguage,
  FormTabs,
  FormTab,
  FormSteps,
  FormStepsControls,
  FormStepsControl,
  FormStep,
  FormElements,
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  ElementAddon,

  FlatpickrWrapper,
  TrixWrapper,

  CheckboxgroupSlotCheckbox,
  FileSlotFilePreview,
  FileSlotImagePreview,
  FileSlotGalleryPreview,
  MultiselectSlotNoOptions,
  MultiselectSlotNoResults,
  MultiselectSlotOption,
  MultiselectSlotMultipleLabel,
  MultiselectSlotSingleLabel,
  MultiselectSlotTag,
  RadiogroupSlotRadio,
}

export default function(config) {
  const Laraform = class {
    constructor() {
      this.options = {
        config: _.omit(config, ['extensions', 'themes', 'elements', 'components', 'rules']),
        extensions: config.extensions || [],
        themes: config.themes || {},
        elements: config.elements || {},
        components: config.components || {},
        rules: config.rules || {},
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
        'extensions', 'themes', 'elements', 'components', 'rules',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = Object.assign({}, this.options[attr], config[attr])
          }
      })

      // merge
      _.each([
        'locales', 'languages', 'services',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = Object.assign({}, this.options.config[attr], config[attr])
          }
      })

      // deep merge
      _.each([
        'methods', 'endpoints', 'axios'
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr])
          }
      })
      
      // replace
      _.each([
        'theme', 'locale', 'language', 'labels',
        'columns', 'validateOn', 'method', 'vue',
        'beforeSend',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = config[attr]
          }
      })
    }

    locale(locale) {
      this.options.locale = locale
    }

    registerComponents(appOrVue, componenList = components) {
      const theme = this.options.themes[this.options.config.theme]

      _.each(componenList, (component, name) => {
        let componentSetup = component.setup
        let template = theme.components[name] || theme.elements[name]

        component.setup = (props, context) => {
          context = Object.assign({}, context, {
            name: ref(template.name),
            data: reactive(template.data ? template.data() : {}),
          })

          return componentSetup(props, context)
        }

        component.components = template.components

        component.render = function() {
          let renderer
          try {
            renderer = name === 'Laraform' ? this.extendedComponents[this.$options.name] : this.components[this.$options.name] || this.theme.elements[this.$options.name]
          } catch (e) {
            throw new Error(e)
          }

          try {
            if (!this.$options?.staticRenderFns && renderer.staticRenderFns) {
              this.$options.staticRenderFns = renderer.staticRenderFns
            }
          } catch (e) {
            console.log(name)
            throw new Error(e)
          }
          
          return renderer.render.apply(this, arguments)
        }

        appOrVue.component(name, component)
      })
    }

    registerElements(appOrVue) {
      this.registerComponents(appOrVue, elements)
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
      this.options.i18n = this.options.i18n || new i18n(this.options.config)
    }

    install(appOrVue, options) {
      if (options) {
        this.config(options)
      }

      this.initAxios()
      this.initI18n()

      this.registerComponents(appOrVue)
      this.registerElements(appOrVue)

      switch (this.options.config.vue) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor']

          const $laraform = this.options

          appOrVue.mixin({
            data() {
              return {
                $laraform: {},
              }
            },
            methods: {
              __: (expr, data) => this.options.i18n.$t(expr, data)
            },
            beforeCreate() {
              // might exist as test mock
              if (!this.$laraform) {
                this.$laraform = {
                  config: appOrVue.observable($laraform.config),
                  themes: $laraform.themes,
                  elements: $laraform.elements,
                  components: $laraform.components,
                  extensions: $laraform.extensions,
                  rules: $laraform.rules,
                  services: $laraform.services,
                }
              }
            }
          })
          break

        case 3:
          appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1

          appOrVue.config.globalProperties.$laraform = this.options
          appOrVue.provide('$laraform', this.options)

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