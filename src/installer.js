import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'

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

export default function () {
  const Laraform = class {
    constructor() {
      this.options = {}

      this.options.plugins = []
    }

    plugin(plugin) {
      this.options.plugins.push(plugin)
    }

    install(Vue) {
      Vue.prototype.$laraform = this.options

      Vue.component('Laraform', LaraformComponent)
    }
  }

  return new Laraform()
}



