import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'

export default {
  name: 'TextElement',
  mixins: [BaseElement, BaseValidation],
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