import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'

export default {
  name: 'DateElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  data() {
    return {
      /**
      * The flatpickr component.
      * 
      * @type {object} 
      * @default null
      */
      datepicker$: null,
    }
  },
  computed: {

    /**
     * Helper property used for tracking the field's value. It always contains the current and previous Date object or objects.
     * 
     * @type {any}
     */
    model: {
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    /**
      * The value of the element.
      * 
      * @type {any}
      */
    value: {
      get() {
        // Model has no value
        if (!this.model) {
          return this.model
        }

        // No need to format dates
        if (this.valueFormat === false) {
          return this.model
        }

        // Multiple dates should be converted to `valueFormat`
        if (_.isArray(this.model)) {
          let value = []

          _.each(this.model, (date) => {
            if (date === null) {
              return
            }

            value.push(moment(date).format(this.valueFormat))
          })

          return value
        }

        // Convert a single date to `valueFormat`
        return moment(this.model).format(this.valueFormat)
      },
      set(value) {
        // Value is empty
        if (value === this.default || _.isEqual(value, this.default)) {
          this.model = _.clone(this.default)
          return
        }

        // Value is an array of dates
        if (_.isArray(value)) {
          if (['range', 'multiple'].indexOf(this.mode) === -1) {
            throw new TypeError('Setting array as data is not allowed in `single` mode')
          }

          let model = []

          _.each(value, (date) => {
            model.push(date instanceof Date ? date : moment(date, this.loadFormat, true).toDate())
          })

          this.model = model
          return
        }

        // Single value as a string or a Date object
        this.model = value instanceof Date ? value : moment(value, this.loadFormat, true).toDate()
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string}
    */
    placeholder: {
      get() {
        return this.schema.placeholder || null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },

    /**
    * The floating label of the element.
    * 
    * @type {string} 
    * @default null
    */
    floating: {
      get() {
        return this.schema.floating || null
      },
      set(value) {
        this.$set(this.schema, 'floating', value)
      }
    },

    /**
    * Whether the field is *readonly*.
    * 
    * @type {boolean} 
    * @default false
    */
    readonly: {
      get() {
        return this.schema.readonly !== undefined ? this.schema.readonly : false
      },
      set(value) {
        this.$set(this.schema, 'readonly', value)
      }
    },

    /**
     * Defines how date should be formatted in the input field.
     * 
    * @type {string|false} 
    * @default 'from locale'
     */
    displayFormat: {
      get() {
        return this.schema.displayFormat || this.__('laraform.elements.date.displayFormat')
      },
      set(value) {
        this.$set(this.schema, 'displayFormat', value)
      }
    },

    /**
     * Defines how date should be formatted in `value`. If `false` Date object will be used.
     * 
    * @type {string|false} 
    * @default 'YYYY-MM-DD'
     */
    valueFormat: {
      get() {
        return this.schema.valueFormat !== undefined ? this.schema.valueFormat : 'YYYY-MM-DD'
      },
      set(value) {
        this.$set(this.schema, 'valueFormat', value)
      }
    },

    /**
     * Defines how date is formatted when using `load` or `update` method or by directly setting `value`.
     * 
    * @type {string} 
    * @default 'YYYY-MM-DD'
     */
    loadFormat: {
      get() {
        return this.schema.loadFormat || 'YYYY-MM-DD'
      },
      set(value) {
        this.$set(this.schema, 'loadFormat', value)
      }
    },

    /**
    * Flatpickr's mode option. Possible values: `single`, `multiple` or `range`.
    * 
    * @type {string} 
    * @default 'single'
    */
    mode: {
      get() {
        return this.schema.mode || 'single'
      },
      set(value) {
        this.$set(this.schema, 'mode', value)
      }
    },

    /**
     * Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
     * 
     * @type {string|Date} 
     * @default null
     */
    min: {
      get() {
        if (this.schema.min === undefined) {
          return null
        }

        return this.schema.min instanceof Date ? this.schema.min : moment(this.schema.min, this.loadFormat, true).toDate()
      },
      set(value) {
        this.$set(this.schema, 'min', value)
      }
    },

    /**
     * Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object.
     * 
     * @type {string|Date} 
     * @default null
     */
    max: {
      get() {
        if (this.schema.max === undefined) {
          return null
        }

        return this.schema.max instanceof Date ? this.schema.max : moment(this.schema.max, this.loadFormat, true).toDate()
      },
      set(value) {
        this.$set(this.schema, 'max', value)
      }
    },

    /**
     * List of dates to be disabled.
     * 
     * @type {array} 
     * @default []
     */
    disables: {
      get() {
        return this.schema.disables !== undefined ? this.schema.disables : []
      },
      set(value) {
        this.$set(this.schema, 'disables', value)
      }
    },

    /**
    * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
    * 
    * @type {object} 
    * @default {}
    */
    options: {
      get() {
        return Object.assign({}, {
          mode: this.mode,
          dateFormat: this.displayFormat,
          minDate: this.min,
          maxDate: this.max,
          disable: this.disables,
          clickOpens: !this.disabled && !this.readonly,
        }, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },

    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {any}
     * @ignore
     */
    null() {
      return ['range', 'multiple'].indexOf(this.mode) !== -1 ? [] : null
    },
  },
  methods: {
    /**
     * Handles the input event of the date input field.
     * 
     * @private 
     * @param {string|object|array} value date value
     * @returns {void}
     */
    handleInput(value) {
      if (this.disabled || this.readonly) {
        return
      }

      this.model = value
    }
  },
  created() {
    if (['range', 'multiple'].indexOf(this.mode) !== -1) {
      this.previousValue = []
    }
  }
}