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
import vHtmlIf from './directives/html-if'
import { reactive, ref, toRefs, computed } from 'composition-api'

import AddressElement from './components/elements/AddressElement'
import ButtonElement from './components/elements/ButtonElement'
import ButtonsElement from './components/elements/ButtonsElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
import DateElement from './components/elements/DateElement'
import DatesElement from './components/elements/DatesElement'
import DatetimeElement from './components/elements/DatetimeElement'
import FileElement from './components/elements/FileElement'
import GalleryElement from './components/elements/GalleryElement'
import GroupElement from './components/elements/GroupElement'
import HiddenElement from './components/elements/HiddenElement'
import ListElement from './components/elements/ListElement'
import LocationElement from './components/elements/LocationElement'
import MetaElement from './components/elements/MetaElement'
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
import TimeElement from './components/elements/TimeElement'
import ToggleElement from './components/elements/ToggleElement'
import TrixElement from './components/elements/TrixElement'
import TTextareaElement from './components/elements/TTextareaElement'
import TTextElement from './components/elements/TTextElement'
import TTrixElement from './components/elements/TTrixElement'

import Laraform from './components/Laraform'
import FormErrors from './components/FormErrors'
import FormMessages from './components/FormMessages'
import FormLanguageSelector from './components/FormLanguageSelector'
import FormLanguageSelectorTab from './components/FormLanguageSelectorTab'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormWizard from './components/FormWizard'
import FormWizardControls from './components/FormWizardControls'
import FormWizardFinish from './components/FormWizardFinish'
import FormWizardNext from './components/FormWizardNext'
import FormWizardPrevious from './components/FormWizardPrevious'
import FormWizardStep from './components/FormWizardStep'
import FormElements from './components/FormElements'
import FormButton from './components/FormButton'
import FormButtonSubmit from './components/FormButtonSubmit'
import FormButtonAnchor from './components/FormButtonAnchor'
import ElementLayout from './components/ElementLayout'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementInfo from './components/ElementInfo'
import ElementDescription from './components/ElementDescription'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'
import ElementText from './components/ElementText'
import DragAndDrop from './components/DragAndDrop'
import InputAddon from './components/InputAddon'

import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'
import FileSlotProgress from './components/elements/slots/FileSlotProgress'
import FileSlotPreview from './components/elements/slots/FileSlotPreview'
import ImageSlotPreview from './components/elements/slots/ImageSlotPreview'
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
  ButtonsElement,
  CheckboxElement,
  CheckboxgroupElement,
  DateElement,
  DatesElement,
  DatetimeElement,
  FileElement,
  GalleryElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MetaElement,
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
  TimeElement,
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
  FormLanguageSelector,
  FormLanguageSelectorTab,
  FormTabs,
  FormTab,
  FormWizard,
  FormWizardControls,
  FormWizardFinish,
  FormWizardNext,
  FormWizardPrevious,
  FormWizardStep,
  FormElements,
  FormButton,
  FormButtonSubmit,
  FormButtonAnchor,
  ElementLayout,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  InputAddon,

  CheckboxgroupSlotCheckbox,
  FileSlotProgress,
  FileSlotPreview,
  ImageSlotPreview,
  MultiselectSlotNoOptions,
  MultiselectSlotNoResults,
  MultiselectSlotOption,
  MultiselectSlotMultipleLabel,
  MultiselectSlotSingleLabel,
  MultiselectSlotTag,
  RadiogroupSlotRadio,
}

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
      // _.each(this.options.themes, (theme) => {
      //   _.each(Object.assign({}, theme.components, theme.elements), (component, name) => {
      //     applyExtensions(component, name, this.options.extensions)
      //   })
      // })
    }

    initI18n() {
      this.options.i18n = this.options.i18n || new i18n(this.options)
    }

    registerComponents(appOrVue, componenList = components) {
      const theme = this.options.themes[this.options.theme]

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
            console.log(1)
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

    install(appOrVue, options) {
      if (options) {
        this.config(options)
      }

      this.initI18n()

      if (this.options.extensions && this.options.extensions.length) {
        this.applyExtensions()
      }

      this.registerComponents(appOrVue)
      this.registerElements(appOrVue)

      switch (this.options.vue) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor']

          const $laraform = this.options

          appOrVue.directive('html-if', vHtmlIf)

          appOrVue.mixin({
            methods: {
              setRef() {},
              __: (expr, data) => this.options.i18n.$t(expr, data)
            },
            beforeCreate() {
              this.$laraform = appOrVue.observable($laraform)
              this.$vueVersion = 2
            }
          })
          break

        case 3:
          appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1

          appOrVue.config.globalProperties.$laraform = this.options
          appOrVue.config.globalProperties.$vueVersion = 3
          appOrVue.provide('$laraform', this.options)
          appOrVue.provide('$vueVersion', 3)

          appOrVue.directive('html-if', vHtmlIf)

          appOrVue.mixin({
            methods: {
              setRef(prop, key) {
                return function(el) {
                  if (el) {
                    prop[key] = el
                  }
                }
              },
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