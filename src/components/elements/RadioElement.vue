<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'

  export default {
    name: 'RadioElement',
    mixins: [BaseElement, BaseValidation, CanBeDisabled],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "text": { "type": "string", "description": "Text appears next to the radio." },
       *  "radioValue": { "type": "str|num|bool", "description": "Value of the radio button." },
       *  "fieldName": { "type": "string", "description": "Name to be used for the radio input name attribute." },
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
         * Text appears next to the radio.
         * 
         * @type {string}
         * @default null
         */
        text: null,

        /**
         * Value of the radio button.
         * 
         * @type {str|num|bool}
         * @default '1'
         */
        radioValue: '1',

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {str|num|bool} 
        * @default null
        */
        defaultValue: null,

        /**
        * Whether the field is *disabled*.
        * 
        * @type {boolean} 
        * @default false
        */
        disabled: false,

        /**
        * Name of the input field.
        * 
        * @type {string} 
        * @default null
        */
        fieldName: null,
      }
    },
    methods: {

      /**
       * Checks the radio.
       *
       * @public
       * @returns {void}
       */
      check() {
        this.update(this.radioValue)
      },

      /**
       * Unhecks the radio.
       *
       * @public
       * @returns {void}
       */
      uncheck() {
        this.update(this.null)
      },
    },
    created() {
      this.$_copy([
        {'value': 'radioValue'}, 'text', 'fieldName'
      ])

      if (this.fieldName === null) {
        this.fieldName = this.name
      }

      if (this.id === null) {
        this.id = this.fieldName
      }
    },
    mounted() {
      document.getElementsByName(this.fieldName).forEach((element) => {
        element.addEventListener('change', () => {
          if (element.id != this.id) {
            this.update(this.null)
          }
        })
      })
    }
  }
</script>