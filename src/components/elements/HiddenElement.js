import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'

export default {
  name: 'HiddenElement',
  mixins: [BaseElement, BaseValidation],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      /**
       * Element slots.
       * 
       * @type {object}
       * @default {}
       */
      slots: {}
    }
  }
}