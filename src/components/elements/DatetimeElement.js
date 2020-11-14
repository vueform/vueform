import DateElement from './DateElement'
import useDatetime from './../../composables/elements/useDatetime'

export default {
  name: 'DatetimeElement',
  mixins: [DateElement],
  init: useDatetime,
  computed: {

    /**
     * Defines how date should be formatted in the input field.
     * 
    * @type {string|false} 
    * @default 'from locale'
     */
    displayFormat: {
      get() {
        if (this.schema.displayFormat !== undefined) {
          return this.schema.displayFormat
        }

        return this.seconds
          ? this.__('laraform.elements.datetime.secondsDisplayFormat')
          : this.__('laraform.elements.datetime.displayFormat')
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
        if (this.schema.valueFormat !== undefined) {
          return this.schema.valueFormat
        }

        return this.seconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm'
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
        if (this.schema.loadFormat !== undefined) {
          return this.schema.loadFormat
        }

        return this.seconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm'
      },
      set(value) {
        this.$set(this.schema, 'loadFormat', value)
      }
    },

    /**
    * Flatpickr's mode option, which should always return 'single'. Not modifiable.
    * 
    * @type {string} 
    * @default 'single'
    */
    mode: {
      get() {
        return 'single'
      },
      set(value) {
        throw new Exception('Date mode for this element can only be `single`')
      }
    },

    seconds: {
      get() {
        return this.schema.seconds !== undefined ? this.schema.seconds : false
      },
      set(value) {
        this.$set(this.schema, 'seconds', value)
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
    * Additional [options](https://flatpickr.js.org/options/) for flatpickr.
    * 
    * @type {object} 
    * @default {}
    */
    options: {
      get() {
        return Object.assign({}, this.defaultOptions, {
          time_24hr: this.hour24,
          enableTime: true,
          enableSeconds: this.seconds,
        }, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },

    /**
     * Helper property used to determine the element has date.
     * 
     * @type {boolean}
     * @ignore
     */
    hasDate() {
      return true
    },

    /**
     * Helper property used to determine the element has time.
     * 
     * @type {boolean}
     * @ignore
     */
    hasTime() {
      return true
    },
  },
}