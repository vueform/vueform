import TextElement from './../../components/elements/TextElement'

export default {
  name: 'DateElement',
  mixins: [TextElement],
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
     * Helper property used for tracking the field's value.
     * 
     * @type {any}
     */
    model: {
      // need to be a setter/getter variable
      // because in some cases it must behave
      // in a custom way, but it needs a store
      // which is currentValue
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    // /**
    //   * The value of the element.
    //   * 
    //   * @type {any}
    //   */
    value: {
      get() {
        return moment(this.model).format(this.dataFormat)
      },
      set(value) {
        this.model = value
      }
    },

    // /**
    //  * An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.
    //  * 
    //  * @type {object}
    //  */
    // filtered() {
    //   var data = {}

    //   if (!this.available || !this.submit) {
    //     return data
    //   }

    //   switch (this.mode) {
    //     case 'single':
    //       data = this.value
    //       break

    //     case 'multiple':
    //       var dates = []

    //       if (Array.isArray(this.value)) {
    //         _.each(this.value, (date) => {
    //           dates.push(date)
    //         })
    //       }

    //       data = dates
    //       break

    //     case 'range':
    //       var dates = {
    //         from: null,
    //         to: null,
    //       }

    //       if (this.value && this.value[0]) {
    //         dates.from = this.value[0]
    //       }

    //       if (this.value && this.value[1]) {
    //         dates.to = this.value[1]
    //       }

    //       data = dates
    //       break
    //   }

    //   return {
    //     [this.name]: data
    //   }
    // },

    format: {
      get() {
        return this.schema.format || this.__('laraform.elements.date.format')
      },
      set(value) {
        this.$set(this.schema, 'format', value)
      }
    },

    dataFormat: {
      get() {
        return this.schema.dataFormat || 'Y-m-d'
      },
      set(value) {
        this.$set(this.schema, 'dataFormat', value)
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
     * Earliest selectable date.
     * 
     * @type {string} 
     * @default null
     */
    min: {
      get() {
        return this.schema.min !== undefined ? this.schema.min : null
      },
      set(value) {
        this.$set(this.schema, 'min', value)
      }
    },

    /**
     * Latest selectable date.
     * 
     * @type {string} 
     * @default null
     */
    max: {
      get() {
        return this.schema.max !== undefined ? this.schema.max : null
      },
      set(value) {
        this.$set(this.schema, 'max', value)
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
        return this.schema.options !== undefined ? this.schema.options : {}
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },

    /**
    * Determines if the time should use 24 hours format.
    * 
    * @type {boolean} 
    * @default false
    * @ignore
    */
    hour24: {
      get() {
        return this.schema.hour24 !== undefined ? this.schema.hour24 : false
      },
      set(value) {
        this.$set(this.schema, 'hour24', value)
      }
    },

    /**
    * Determines if time picker should also be rendered.
    * 
    * @type {boolean} 
    * @default false
    * @ignore
    */
    time: {
      get() {
        return this.schema.time !== undefined ? this.schema.time : false
      },
      set(value) {
        this.$set(this.schema, 'time', value)
      }
    },

    /**
    * Determines if seconds should be part of time picker, if used.
    * 
    * @type {boolean} 
    * @default false
    * @ignore
    */
    seconds: {
      get() {
        return this.schema.seconds !== undefined ? this.schema.seconds : false
      },
      set(value) {
        this.$set(this.schema, 'seconds', value)
      }
    },

    /**
    * Determines if calendar should be rendered.
    * 
    * @type {boolean} 
    * @default true
    * @ignore
    */
    calendar: {
      get() {
        return this.schema.calendar !== undefined ? this.schema.calendar : true
      },
      set(value) {
        this.$set(this.schema, 'calendar', value)
      }
    },

    /**
     * Determines if the element's value is an array.
     *
     * @type {boolean}
     * @ignore
     */
    isArrayType() {
      return this.mode == 'multiple'
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
    * Determines whether the element has date.
    * 
    * @type {boolean} 
    * @ignore
    */
    hasDate() {
      return true
    },

    /**
    * Determines whether the element has time.
    * 
    * @type {boolean} 
    * @ignore
    */
    hasTime() {
      return false
    },
  },
  methods: {

    // /**
    //  * Formats a given date to the expected data format.
    //  * 
    //  * @public
    //  * @param {string} date date to be formatted.
    //  * @returns {void}
    //  */
    // formatDate(date) {
    //   if (!date) {
    //     return date
    //   }

    //   return moment(date, this.dataFormat).format(this.dataFormat)
    // },
  }
}