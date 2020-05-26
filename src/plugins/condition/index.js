import Condition from './services/condition'

export default {
  apply: /.*Element$/,

  install(options) {
    options.services.condition = Condition

    return options
  },

  beforeCreate() {
    this.$options.computed.available = () => {
      if (this.parent && this.parent.available !== undefined && !this.parent.available) {
        return false
      }

      if (!this.conditions) {
        return true
      }

      return !_.some(this.conditions, (condition) => {
        return !this.$laraform.services.condition.check(condition, this.path || null, this.form$)
      })
    }
  }
}