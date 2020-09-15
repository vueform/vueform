import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'

export default {
  name: 'MetaElement',
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
}