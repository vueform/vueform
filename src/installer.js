import _ from 'lodash'

export default function (config) {
  const Laraform = class {
    constructor() {
      this.options = {}

      this.options.config = config

      this.options.plugins = config.plugins

      this.options.themes = config.themes

      this.options.elements = config.elements

      this.options.components = config.components
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
      _.each([], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr])
          }
      })
    }

    install(Vue) {
      let options = this.options

      Vue.mixin({
        beforeCreate() {
          this.$laraform = Vue.observable(options)
        }
      })

      Vue.component('Laraform', Laraform)
    }
  }

  return new Laraform()
}



