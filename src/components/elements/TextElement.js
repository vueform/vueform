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
  }
}