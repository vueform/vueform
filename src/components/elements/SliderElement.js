import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'

export default {
  name: 'SliderElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "min": { "type": "number", "description": "Minimum value of the slider." },
     *  "max": { "type": "number", "description": "Maximum value of the slider." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "default": { "type": "num|arr", "description": "Value of element when the form is initially loaded or reseted. If an array is given the slider will have multiple handles." },
     *  "options": { "type": "object", "description": "Additional [options](https://nightcatsama.github.io/vue-slider-component/example/#demo) for slider." }
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
      * The vue-slider-component component.
      * 
      * @type {object} 
      * @default null
      */
      slider$: null,
    }
  },
  computed: {

    /**
    * Minimum value of the slider.
    * 
    * @type {number} 
    * @default 0
    */
    min: {
      get() {
        return this.schema.min !== undefined ? this.schema.min : 0
      },
      set(value) {
        this.$set(this.schema, 'min', value)
      }
    },

    /**
    * Maximum value of the slider.
    * 
    * @type {number} 
    * @default 100
    */
    max: {
      get() {
        return this.schema.max !== undefined ? this.schema.max : 100
      },
      set(value) {
        this.$set(this.schema, 'max', value)
      }
    },

    /**
    * Value of element when the form is initially loaded or reseted. If an array is given the slider will have multiple handles.
    * 
    * @type {num|arr} 
    * @default null
    */
    default: {
      get() {
        return this.schema.default !== undefined ? this.schema.default : this.null
      },
      set(value) {
        this.$set(this.schema, 'default', value)
      }
    },

    /**
    * Default options for vue-js-toggle-button.
    * 
    * @type {object} 
    * @default {}
    * @ignore
    */
    defaultOptions() {
      return {
        min: this.min,
        max: this.max,
        disabled: this.disabled,
      }
    },

    /**
    * Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider.
    * 
    * @type {object} 
    * @default {}
    */
    options: {
      get() {
        return Object.assign({}, this.defaultOptions, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },


    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {num}
     * @ignore
     */
    null() {
      return this.min
    },

    /**
     * Helper property used to determine the slider has multiple handlers.
     * 
     * @type {boolean}
     * @ignore
     */
    multiple() {
      return _.isArray(this.value)
    },
  },
  methods: {
    /**
     * Validates the element.
     * 
     * @public
     * @returns {void}
     */
    validate() {
      if (!this.schema.rules) {
        return
      }

      if (this.multiple) {
        // going through each value of the
        // slider and validate them all for
        // the same field
        _.each(this.model, (modelValue) => {
          _.each(this.Validators, (Validator) => {
            Validator.validate(modelValue)
          })

          if (this.invalid) {
            return false
          }
        })
      }
      else {
        _.each(this.Validators, (Validator) => {
          Validator.validate(modelValue)
        })

      }

      this.state.validated = true
    },
  },
  mounted() {
    this.slider$ = this.$refs.slider$
  }
}