<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'

  export default {
    mixins: [BaseElement, BaseValidation, CanBeDisabled],
    name: 'DateElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "mode": { "type": "string", "description": "Flatpickr's mode option. Possible values: `single`, `multiple` or `range`." },
       *  "format": { "type": "string", "description": "Visisble format of the date using [flatpickr's formatting tokens](https://flatpickr.js.org/formatting/). Defaults to elements.date.format from locale." },
       *  "dataFormat": { "type": "string", "description": "Submittable format of the date using [momentjs's formatting tokens](https://momentjs.com/docs/#year-month-and-day-tokens). Defaults to elements.date.dataFormat from locale." },
       *  "min": { "type": "string", "description": "Earliest selectable date." },
       *  "max": { "type": "string", "description": "Latest selectable date." },
       *  "disables": { "type": "array", "description": "List of dates to be disabled." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
       *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
       *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
       *  "floating": { "type": "string", "description": "The floating label of the element." },
       *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
       *  "options": { "type": "object", "description": "Additional [options](https://flatpickr.js.org/options/) for flatpickr." }
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
        * Flatpickr's mode option. Possible values: `single`, `multiple` or `range`.
        * 
        * @type {string} 
        * @default 'single'
        */
        mode: 'single',

        /**
        * Visisble format of the date using [flatpickr's formatting tokens](https://flatpickr.js.org/formatting/). Defaults to elements.date.format from locale.
        * 
        * @type {string} 
        */
        format: this.__('elements.date.format'),

        /**
        * Submittable format of the date using [momentjs's formatting tokens](https://momentjs.com/docs/#year-month-and-day-tokens). Defaults to elements.date.dataFormat from locale.
        * 
        * @type {string} 
        */
        dataFormat: this.__('elements.date.dataFormat'),

        /**
         * Earliest selectable date.
         * 
         * @type {string} 
         * @default null
         */
        min: null,

        /**
         * Latest selectable date.
         * 
         * @type {string} 
         * @default null
         */
        max: null,

        /**
         * List of dates to be disabled.
         * 
         * @type {array} 
         * @default []
         */
        disables: [],

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
        * Whether the form element is *readonly*.
        * 
        * @type {boolean} 
        * @default false
        */
        readonly: false,

        /**
        * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
        * 
        * @type {object} 
        * @default {}
        */
        options: {},

        /**
        * The flatpickr component.
        * 
        * @type {object} 
        * @default null
        */
        datepicker$: null,

        /**
        * Determines if the time should use 24 hours format.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        hour24: false,

        /**
        * Determines if time picker should also be rendered.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        time: false,

        /**
        * Determines if seconds should be part of time picker, if used.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        seconds: false,

        /**
        * Determines if calendar should be rendered.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        calendar: true,
      }
    },
    computed: {
      /**
       * The value of the element.
       * 
       * @type {any}
       */
      value: {
        get() {
          var model = this.model

          if (_.isArray(model)) {
            var value = []

            _.each(model, (date) => {
              value.push(this.formatDate(date))
            })
          } else {
            var value = this.formatDate(model)
          }

          return value
        },
        set(value) {
          this.model = value
        }
      },

      /**
       * An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.
       * 
       * @type {object}
       */
      filtered() {
        var data = {}

        if (!this.available || !this.submit) {
          return data
        }

        switch (this.mode) {
          case 'single':
            data = this.value
            break

          case 'multiple':
            var dates = []

            if (Array.isArray(this.value)) {
              _.each(this.value, (date) => {
                dates.push(date)
              })
            }

            data = dates
            break

          case 'range':
            var dates = {
              from: null,
              to: null,
            }

            if (this.value && this.value[0]) {
              dates.from = this.value[0]
            }

            if (this.value && this.value[1]) {
              dates.to = this.value[1]
            }

            data = dates
            break
        }

        return {
          [this.name]: data
        }
      },
      
      /**
       * Helper property used to determine if the calendar should be hiddden.
       * 
       * @type {boolean}
       * @ignore
       */
      hideCalendar() {
        return !this.calendar
      },
      
      /**
       * Helper property used for tracking the field's value.
       * 
       * @type {string}
       * @ignore
       */
      model: {
        get() {
          return this.memory
        },
        set(value) {
          this.memory = value
        }
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

        _.each(this.Validators, (Validator) => {
          Validator.validate(this.value)
        })

        this.state.validated = true
      },

      /**
       * Formats a given date to the expected data format.
       * 
       * @public
       * @param {string} date date to be formatted.
       * @returns {void}
       */
      formatDate(date) {
        if (!date) {
          return date
        }

        return moment(date, this.dataFormat).format(this.dataFormat)
      },

      /**
       * Determines if the element's value is an array.
       *
       * @private
       * @returns {boolean}
       */
      isArrayType() {
        return this.mode == 'multiple'
      },

      /**
       * Inits the element's data properties.
       * 
       * @private 
       * @returns {void}
       */
      $_initParams() {
        this.$_copy([
          'mode', 'format', 'dataFormat', 'max',
          'min', 'disables',
        ])

        this.$_initOptions()
      }
    },
    created() {
      this.datepicker$ = this.$refs.datepicker$

      this.$_initParams()
    }
  }
</script>