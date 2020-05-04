import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'
import Vue from 'vue'

import LaraformComponent from './components/Laraform'

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

if (!window.Vue) {
    window.Vue = Vue
}

export default function (config) {
  const Laraform = class {
    constructor() {
      this.options = {}

      this.options.config = config

      this.options.plugins = config.plugins

      this.options.environments = config.environments
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

    config(config) {
      // replace
      _.each([
        'theme',
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
      Vue.prototype.$laraform = this.options

      Vue.component('Laraform', LaraformComponent)
    }
  }

  return new Laraform()
}



