import _ from 'lodash'
import moment from 'moment'
import axios from './services/axios'
import validation from './services/validation'
import messageBag from './services/messageBag'
import applyPlugins from './utils/applyPlugins'
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

      this.options.plugins = config.plugins

      this.options.themes = config.themes

      this.options.elements = config.elements

      this.options.components = config.components

      this.options.locales = {}
      
      this.options.rules = {}

      this.options.services = {
        validation,
        axios,
        messageBag,
      }
    }

    plugins(plugins) {
      _.each(plugins, (plugin) => {
        this.options.plugins.push(plugin)
      })
    }

    plugin(plugin) {
      this.options.plugins.push(plugin)
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

    install(Vue) {
      let options = this.options

      _.each(this.options.plugins, (plugin) => {
        if (plugin.install === undefined) {
          return
        }

        let installedOptions = plugin.install(Vue, options)

        if (installedOptions) {
          options = installedOptions
        }
      })

      _.each(this.options.themes, (theme) => {
        _.each(Object.assign({}, theme.components, theme.elements), (component, name) => {
          applyPlugins(component, name, this.options.plugins)
        })
      })

      Vue.mixin({
        beforeCreate() {
          this.$laraform = Vue.observable(options)
        }
      })
    }
  }

  return new Laraform()
}



