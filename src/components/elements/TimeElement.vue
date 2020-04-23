<script>
  import DateElement from './DateElement.vue'

  export default {
    name: 'TimeElement',
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
        * Visisble format of the date using [flatpickr's formatting tokens](https://flatpickr.js.org/formatting/). Defaults to elements.time.format from locale.
        * 
        * @type {string} 
        */
        format: this.__('elements.time.format'),

        /**
        * Submittable format of the date using [momentjs's formatting tokens](https://momentjs.com/docs/#year-month-and-day-tokens). Defaults to elements.time.dataFormat from locale.
        * 
        * @type {string} 
        */
        dataFormat: this.__('elements.time.dataFormat'),

        /**
        * Flatpickr's mode option. Possible values: `single`
        * 
        * @type {string} 
        * @default 'single'
        * @ignore
        */
        mode: 'single',

        /**
        * Determines if time picker should also be rendered.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        time: true,

        /**
        * Determines if calendar should be rendered.
        * 
        * @type {boolean} 
        * @default false
        * @ignore
        */
        calendar: false,

        /**
         * List of dates to be disabled (not used).
         * 
         * @type {array} 
         * @default []
         * @ignore
         */
        disables: [],

        /**
         * Earliest selectable date (not used).
         * 
         * @type {string} 
         * @default null
         * @ignore
         */
        min: null,

        /**
         * Latest selectable datee (not used).
         * 
         * @type {string} 
         * @default null
         * @ignore
         */
        max: null,
      }
    },
    methods: {
      $_initParams() {
        this.$_copy([
          'hour24', 'seconds', 'dataFormat', 'format',
        ])

        this.$_initOptions()

        if (this.seconds) {
          if (!this.schema.format) {
            this.format = this.__('elements.time.secondsFormat')
          }

          if (!this.schema.dataFormat) {
            this.dataFormat = this.__('elements.time.secondsDataFormat')
          }
        }
      },
    },
  }
</script>