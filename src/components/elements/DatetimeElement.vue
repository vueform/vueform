<script>
  import DateElement from './DateElement.vue'

  export default {
    name: 'DatetimeElement',
    mixins: [DateElement],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "hour24": { "type": "boolean", "description": "Determines if the time should use 24 hours format." },
       *  "seconds": { "type": "boolean", "description": "Determines if seconds should be part of time picker." },
       *  "format": { "type": "string", "description": "Visisble format of the date using [flatpickr's formatting tokens](https://flatpickr.js.org/formatting/)." },
       *  "dataFormat": { "type": "string", "description": "Submittable format of the date using [momentjs's formatting tokens](https://momentjs.com/docs/#year-month-and-day-tokens)." },
       *  "min": { "type": "string", "description": "Earliest selectable date." },
       *  "max": { "type": "string", "description": "Latest selectable date." },
       *  "disable": { "type": "array", "description": "List of dates to be disabled." },
       *  "convertTimezone": { "type": "boolean", "description": "Whether timezone conversion should be made." },
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
        * Determines if the time should use 24 hours format.
        * 
        * @type {boolean} 
        * @default true
        */
        hour24: true,

        /**
        * Determines if seconds should be part of time picker.
        * 
        * @type {boolean} 
        * @default false
        */
        seconds: false,
        
        /**
        * Visisble format of the date using [flatpickr's formatting tokens](https://flatpickr.js.org/formatting/). Defaults to elements.datetime.format from locale.
        * 
        * @type {string} 
        */
        format: this.__('elements.datetime.format'),

        /**
        * Submittable format of the date using [momentjs's formatting tokens](https://momentjs.com/docs/#year-month-and-day-tokens). Defaults to elements.datetime.dataFormat from locale.
        * 
        * @type {string} 
        */
        dataFormat: this.__('elements.datetime.dataFormat'),

        /**
        * Determines if the [user's timezone](internationalization#user-timezone) should be converted to [app's timezone](internationalization#app-timezone).
        * 
        * @type {boolean} 
        * @default false
        */
        convertTimezone: false,

        /**
        * Determines if time picker should also be rendered.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        time: true,

        /**
        * Flatpickr's mode option. Possible values: `single`, `multiple` or `range`.
        * 
        * @type {string} 
        * @default 'single'
        * @ignore
        */
        mode: 'single',
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
          return this.toFinalTimezone(this.model)
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

        return {
          [this.name]: this.value
        }
      },

      /**
       * The timezone of the application.
       * 
       * @type {string}
       */
      timezone() {
        return this.form$.timezone
      },

      /**
       * The timezone of the user.
       * 
       * @type {string}
       */
      userTimezone() {
        return this.form$.userTimezone ? this.form$.userTimezone : moment.tz.guess()
      },
    },
    methods: {
      
      /**
       * Loads data for element or clears the element if the element's key is not found in the `data` object.
       *
       * @public
       * @param {object} data an object containing data for the element using its **name as key**
       * @returns {void}
       */
      load(data) {
        if (this.available && data && data[this.name] !== undefined) {
          this.value = this.convertTimezone
            ? this.toUserTimezone(data[this.name])
            : data[this.name]
          return
        }

        this.clear()
        this.resetValidators()
      },

      /**
       * Converts the date from user's timetzone to app's timezone.
       * 
       * @public 
       * @param {string} date date to be converted.
       * @returns {string}
       */
      toAppTimezone(date) {
        return moment
          .tz(this.formatDate(date), this.userTimezone)
          .clone()
          .tz(this.timezone)
          .format(this.dataFormat)
      },

      /**
       * Converts the date from app's timetzone to user's timezone.
       * 
       * @public 
       * @param {string} date date to be converted.
       * @returns {string}
       */
      toUserTimezone(date) {
        return moment
          .tz(this.formatDate(date), this.timezone)
          .clone()
          .tz(this.userTimezone)
          .format(this.dataFormat)
      },

      /**
       * Converts the date if neccessary to app timezone.
       * 
       * @private 
       * @param {string} date date to be converted.
       * @returns {string}
       */
      toFinalTimezone(date) {
        if (!date) {
          return date
        }

        if (!this.convertTimezone) {
          return this.formatDate(date)
        }

        return this.toAppTimezone(date)
      },

      /**
       * Inits the element's data properties.
       * 
       * @private 
       * @returns {void}
       */
      $_initParams() {
        this.$_copy([
          'hour24', 'seconds', 'convertTimezone', 'format',
          'dataFormat', 'max', 'min', 'disable',
        ])

        this.$_initOptions()

        if (this.seconds) {
          if (!this.schema.format) {
            this.format = this.__('elements.datetime.secondsFormat')
          }

          if (!this.schema.dataFormat) {
            this.dataFormat = this.__('elements.datetime.secondsDataFormat')
          }
        }
      },
    },
  }
</script>