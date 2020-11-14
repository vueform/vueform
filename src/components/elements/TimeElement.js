import DatetimeElement from './DatetimeElement'
import useTime from './../../composables/elements/useTime'

export default {
  name: 'TimeElement',
  mixins: [DatetimeElement],
  init: useTime,
  computed: {

    /**
     * Defines how time should be formatted in the input field.
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
          ? this.__('laraform.elements.time.secondsDisplayFormat')
          : this.__('laraform.elements.time.displayFormat')
      },
      set(value) {
        this.$set(this.schema, 'displayFormat', value)
      }
    },

    /**
     * Defines how time should be formatted in `value`. If `false` Date object will be used.
     * 
    * @type {string|false} 
    * @default 'YYYY-MM-DD'
     */
    valueFormat: {
      get() {
        if (this.schema.valueFormat !== undefined) {
          return this.schema.valueFormat
        }

        return this.seconds ? 'HH:mm:ss' : 'HH:mm'
      },
      set(value) {
        this.$set(this.schema, 'valueFormat', value)
      }
    },

    /**
     * Defines how time is formatted when using `load` or `update` method or by directly setting `value`.
     * 
    * @type {string} 
    * @default 'YYYY-MM-DD'
     */
    loadFormat: {
      get() {
        if (this.schema.loadFormat !== undefined) {
          return this.schema.loadFormat
        }

        return this.seconds ? 'HH:mm:ss' : 'HH:mm'
      },
      set(value) {
        this.$set(this.schema, 'loadFormat', value)
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
          noCalendar: true,
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
      return false
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