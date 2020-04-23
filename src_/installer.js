import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'

import LaraformComponent from './components/Laraform'
import store from './store'

if (!window.Laraform) {
    window.Laraform = LaraformComponent
}

if (!window._) {
    window._ = _
}

if (!window.axios) {
    window.axios = axios
}

if (!window.moment) {
    window.moment = moment
}

export default function (config) {
  const Laraform = class {
    constructor() {
      this.options = {}

      this.options.elements = {}

      this.options.config = config

      this.options.locales = config.locales

      this.options.themes = config.themes
      
      this.options.rules = config.rules
    }

    config(config) {
      // replace
      _.each([
        'theme', 'layout', 'labels', 'columns',
        'languages', 'language', 'locale', 'timezone',
        'userTimezone', 'validateOn', 'headers',
        'placesjs', 'formErrors',
        ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = config[attr]
          }
      })

      // merge
      _.each([
        'endpoints',
        ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr])
          }
      })
    }

    store(Store) {
      Store.registerModule('laraform', store)
    }

    elements(elements) {
      this.options.elements = Object.assign({}, this.options.elements, elements)
    }

    element(name, element) {
      this.options.elements[_.upperFirst(_.camelCase(name+'-element'))] = element
    }

    rule(name, rule) {
      this.options.rules[name] = rule
    }

    theme(name, theme) {
      this.options.themes[name] = theme
    }

    locale(language, locale) {
      this.options.locales[language] = locale
    }

    tag(path, value) {
      _.set(this.options.locales, path, value)
    }

    install(Vue) {
      Vue.component('Laraform', LaraformComponent)

      Vue.config.ignoredElements = ['trix-editor']

      window.laraform = {
        config: this.options.config,
        locales: this.options.locales,
        elements: this.options.elements,
        themes: this.options.themes,
        rules: this.options.rules,
      }

      // add extra headers for each
      // axios request from config
      _.each(laraform.config.headers, (header) => {
        if (!window.axios.defaults.headers.common[header.name]) {
          window.axios.defaults.headers.common[header.name] = header.value
        }
      })

    }
  }

  return new Laraform()
}



