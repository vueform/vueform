import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'

export default {
  name: 'TextElement',
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