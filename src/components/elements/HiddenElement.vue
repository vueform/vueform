<script>
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
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {string} 
        * @default null
        */
        defaultValue: null,

        slots: {}
      }
    }
  }
</script>