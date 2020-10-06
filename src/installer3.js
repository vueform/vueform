import _ from 'lodash'
import moment from 'moment'
import axios from './services/axios'
import validation from './services/validation'
import messageBag from './services/messageBag'
import autosize from './services/autosize'
import location from './services/location'
import condition from './services/condition'
import applyExtensions from './utils/applyExtensions'
import store from './store'

if (window._ === undefined) {
  window._ = _
}

if (window.moment === undefined) {
  window.moment = moment
}

export default function (config) {
  const Laraform = class {
    constructor() {
      this.options = {}

      this.options.config = config

      this.options.extensions = config.extensions

      this.options.themes = config.themes

      this.options.elements = config.elements

      this.options.components = config.components

      this.options.locales = {}
      
      this.options.rules = {}

      this.options.services = {
        validation,
        axios,
        messageBag,
        autosize,
        location,
        condition,
      }
    }

    extensions(extensions) {
      _.each(extensions, (extension) => {
        this.options.extensions.push(extension)
      })
    }

    extension(extension) {
      this.options.extensions.push(extension)
    }

    theme(name, theme) {
      this.options.themes[name] = theme
    }

    locale(locale, messages) {
      this.options.locales[locale] = messages
    }

    elements(elements) {
      this.options.elements = Object.assign({}, this.options.elements, elements)
    }

    element(name, element) {
      this.options.elements[_.upperFirst(_.camelCase(name+'-element'))] = element
    }

    components(components) {
      this.options.components = Object.assign({}, this.options.components, components)
    }

    component(name, component) {
      this.options.components[name] = component
    }

    rule(name, rule) {
      this.options.rules[name] = rule
    }

    store(Store) {
      Store.registerModule('laraform', store)
    }

    config(config) {
      // replace
      _.each([
        'theme', 'labels',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = config[attr]
          }
      })

      // merge
      _.each([
        'endpoints'
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr])
          }
      })
    }

    install(app) {
      let options = this.options

      app.mixin({
        methods: {
          $set(obj, key, value) {
            obj[key] = value
          },
          __(expr, data) {
            let tag
            let locale = this.selectedLocale !== undefined ? this.selectedLocale : this.locale

            tag = this.$_isVueI18nInstalled() ? (this.$t(expr, data) || expr) : (_.get(this.$laraform.locales[locale], expr) || expr)
            
            if (data === undefined) {
              data = {}
            }

            _.each(data, (value, key) => {
              tag = tag.replace(':' + key, value)
            })

            _.each(data, (value, key) => {
              tag = tag.replace('{' + key + '}', value)
            })

            return tag
          },
          $_isVueI18nInstalled() {
            return !!(this.$i18n && this.$i18n.constructor && this.$i18n.constructor.name == 'VueI18n' && this.$t !== undefined)
          }
        }
      })

      _.each(this.options.themes, (theme) => {
        _.each(Object.assign({}, theme.components, theme.elements), (component, name) => {
          applyExtensions(component, name, this.options.extensions)
        })
      })

      app.config.globalProperties.$laraform = options
    }
  }

  return new Laraform()
}



