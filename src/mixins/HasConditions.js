import Condition from './../utils/condition'
import ConditionDirective from './../directives/condition'

export default {
  directives: {
    condition: ConditionDirective
  },
  computed: {
    /**
     * Whether the element has any unmet conditions.
     * 
     * @type boolean
     */
    available() {
      if (this.parent && this.parent.available !== undefined && !this.parent.available) {
        return false
      }

      if (!this.conditions) {
        return true
      }

      return !_.some(this.conditions, (condition) => {
        return !Condition.check(condition, this.path || null, this.form$)
      })
    },
  },
}