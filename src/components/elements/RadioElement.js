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
  computed: {

    /**
     * Text appears next to the radio.
     * 
     * @type {string}
     * @default ''
     */
    text: {
      get() {
        return this.schema.text || ''
      },
      set(value) {
        this.$set(this.schema, 'text', value)
      }
    },

    /**
     * Value of the radio button.
     * 
     * @type {str|num|bool}
     * @default '1'
     */
    radioValue: {
      get() {
        return this.schema.radioValue !== undefined ? this.schema.radioValue : 1
      },
      set(value) {
        this.$set(this.schema, 'radioValue', value)
      }
    },

    /**
    * Name of the input field.
    * 
    * @type {string} 
    * @default '=name'
    */
    fieldName: {
      get() {
        return this.schema.fieldName !== undefined ? this.schema.fieldName : this.name
      },
      set(value) {
        this.$set(this.schema, 'fieldName', value)
      }
    },
  },
  methods: {

    /**
     * Checks the radio.
     *
     * @public
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @returns {void}
     */
    check(triggerChange) {
      this.update(this.radioValue, triggerChange)
    },

    /**
     * Unhecks the radio.
     *
     * @public
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @returns {void}
     */
    uncheck(triggerChange) {
      this.update(this.null, triggerChange)
    },
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