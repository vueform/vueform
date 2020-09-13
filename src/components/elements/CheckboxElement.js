import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'

export default {
  name: 'CheckboxElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
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
  computed: {

    /**
     * Text appears next to the checkbox.
     * 
     * @type {string}
     * @default null
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
     * Value of the element if checkbox is *checked*.
     * 
     * @type {str|num|bool}
     * @default true
     */
    trueValue: {
      get() {
        return this.schema.trueValue !== undefined ? this.schema.trueValue : true
      },
      set(value) {
        this.$set(this.schema, 'trueValue', value)
      }
    },

    /**
     * Value of the element if checkbox is *unchecked*.
     * 
     * @type {str|num|bool}
     * @default false
     */
    falseValue: {
      get() {
        return this.schema.falseValue !== undefined ? this.schema.falseValue : false
      },
      set(value) {
        this.$set(this.schema, 'falseValue', value)
      }
    },

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
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @returns {void}
     */
    check(triggerChange) {
      this.update(this.trueValue, triggerChange)
    },

    /**
     * Unhecks the checkbox.
     *
     * @public
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @returns {void}
     */
    uncheck(triggerChange) {
      this.update(this.falseValue, triggerChange)
    },
  },
}