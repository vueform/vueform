<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'

  export default {
    mixins: [BaseElement, BaseValidation, CanBeDisabled],
    name: 'CheckboxElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "text": { "type": "string", "description": "Text appears next to the checkbox." },
       *  "trueValue": { "type": "str|num|bool", "description": "Value of the element if checkbox is *checked*." },
       *  "falseValue": { "type": "str|num|bool", "description": "Value of the element if checkbox is *unchecked*." },
       *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
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
         * Text appears next to the checkbox.
         * 
         * @type {string}
         * @default null
         */
        text: null,

        /**
         * Value of the element if checkbox is *checked*.
         * 
         * @type {str|num|bool}
         * @default true
         */
        trueValue: true,

        /**
         * Value of the element if checkbox is *unchecked*.
         * 
         * @type {str|num|bool}
         * @default false
         */
        falseValue: false,

        /**
         * Value of element when the form is initially loaded or reseted.
         * 
         * @type {str|num|bool} 
         * @default null
         */
        defaultValue: null,
      }
    },
    computed: {

      /**
       * Helper property used to determine the element's 'null' value.
       * 
       * @type {boolean}
       * @ignore
       */
      null() {
        return this.falseValue
      }
    },
    methods: {

      /**
       * Checks the checkbox.
       *
       * @public
       * @returns {void}
       */
      check() {
        this.update(this.trueValue)
      },

      /**
       * Unhecks the checkbox.
       *
       * @public
       * @returns {void}
       */
      uncheck() {
        this.update(this.falseValue)
      },

      /**
       * Inits the element.
       * 
       * @private 
       * @returns {void}
       */
      $_initElement() {
        this.$_copy([
          'text', 'trueValue', 'falseValue',
        ])

        this.value = this.defaultValue !== null
          ? this.defaultValue
          : this.null
      },
    },
  }
</script>