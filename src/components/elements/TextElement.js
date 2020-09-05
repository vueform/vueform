import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import $model from './../../directives/$model'

export default {
  name: 'TextElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  computed: {
    /**
    * The placeholder of the element.
    * 
    * @type {string}
    */
    placeholder() {
      return this.schema.placeholder || null
    },

    /**
    * If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur.
    * 
    * @type {number}
    * @default null
    */
    debounce() {
      return this.schema.debounce || null
    },
  }
}