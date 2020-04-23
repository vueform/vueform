<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'
  import HasAddons from './../../mixins/HasAddons'

  export default {
    name: 'PasswordElement',
    mixins: [BaseElement, BaseValidation, HasAddons, CanBeDisabled],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
       *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
       *  "floating": { "type": "string", "description": "The floating label of the element." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
       *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
       *  "addon": { "type": "object", "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons." }
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

        /**
        * The placeholder of the element.
        * 
        * @type {string} 
        * @default null
        */
        placeholder: null,

        /**
        * The floating label of the element.
        * 
        * @type {string} 
        * @default null
        */
        floating: null,

        /**
        * Whether the field is *readonly*.
        * 
        * @type {boolean} 
        * @default false
        */
        readonly: false,

        /**
         * The HTML type of input field (like type="text").
         * 
         * @type {string}
         * @default 'password'
         * @ignore
         */
        type: 'password',
      }
    }
  }
</script>