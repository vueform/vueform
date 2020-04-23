<script>
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
        * Minimum value of the slider.
        * 
        * @type {number} 
        * @default 0
        */
        min: 0,

        /**
        * Maximum value of the slider.
        * 
        * @type {number} 
        * @default 100
        */
        max: 100,

        /**
        * Value of element when the form is initially loaded or reseted. If an array is given the slider will have multiple handles.
        * 
        * @type {num|arr} 
        * @default null
        */
        defaultValue: null,

        /**
        * Additional [options](https://github.com/NightCatSama/vue-slider-component/tree/v2#options) for slider.
        * 
        * @type {object} 
        * @default {}
        */
        options: {}
      }
    },
    computed: {
      /**
       * Helper property used to determine the element's 'null' value.
       * 
       * @type {num}
       * @ignore
       */
      null() {
        return 0
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
    created() {
      this.$_copy([
        'min', 'max',
      ])

      this.$_initOptions()
    }
  }
</script>