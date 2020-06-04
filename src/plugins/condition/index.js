import _ from 'lodash'
import Condition from './services/condition'

export default {
  apply: [/.*Element$/, /Tab/],

  install(Vue, options) {
    options.services.condition = Condition

    return options
  },

  computed: {
    available() {
      if (this.parent && this.parent.available !== undefined && !this.parent.available) {
        return false
      }

      if (!this.conditions) {
        return true
      }

      return !_.some(this.conditions, (condition) => {
        return !this.$laraform.services.condition.check(condition, this)
      })
    }
  }
}