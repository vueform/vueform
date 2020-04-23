<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'

  export default {
    name: 'ToggleElement',
    mixins: [BaseElement, BaseValidation, CanBeDisabled],
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "text": { "type": "string", "description": "Text to appear next to the toggle." },
       *  "labels": { "type": "object", "description": "Labels to be displayed for the toggle. If `false` no labels are displayed. Example: `{checked: 'Foo', unchecked: 'Bar'}`" },
       *  "speed": { "type": "number", "description": "The speed of toggle animation in milliseconds." },
       *  "dimensions": { "type": "object", "description": "Dimensions of the toggle input. Example: `{ width: 50, height: 22 }`" },
       *  "colors": { "type": "object", "description": "Colors of the toggle input. If not specified toggle input colors will be based on CSS. Example: `{ background: '#777777', handle: '#FFFFFF' }`" },
       *  "default": { "type": "boolean", "description": "Value of element when the form is initially loaded or reseted." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
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
        * Text to appear next to the toggle.
        * 
        * @type {string} 
        * @default null
        */
        text: null,

        /**
         * Value of the element if toggle is *on*.
         * 
         * @type {str|num|bool}
         * @default true
         */
        trueValue: true,

        /**
         * Value of the element if toggle is *off*.
         * 
         * @type {str|num|bool}
         * @default false
         */
        falseValue: false,

        /**
        * Labels to be displayed for the toggle. If `false` no labels are displayed.
        * 
        * @type {object} 
        * @default false
        */
        labels: false,
        
        /**
        * The speed of toggle animation in milliseconds.
        * 
        * @type {number} 
        * @default 300
        */
        speed: 300,

        /**
        * Dimensions of the toggle input. Default: `{ width: 50, height: 22 }`
        * 
        * @type {object} 
        * @default {...}
        */
        dimensions: {
          width: 50,
          height: 22,
        },

        /**
        * Colors of the toggle input. Default: `{ background: '#777777', handle: '#FFFFFF' }`
        * 
        * @type {object} 
        * @default {...}
        */
        colors: {
          background: '#777777',
          handle: '#FFFFFF',
        },

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {boolean} 
        * @default false
        */
        defaultValue: false,

        /**
        * Whether the toggle should use CSS colors. Turns to `false` if `colors` is defined.
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        cssColors: true,

        /**
        * Whether to watch for element value changes and sync it with the toggle
        * 
        * @type {boolean} 
        * @default true
        * @ignore
        */
        sync: true,
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
          // return this.memory ? this.trueValue : this.falseValue
          // https://github.com/laraform/laraform/issues/9
          return this.memory ? this.trueValue : this.falseValue
        },
        set(value) {
          if (value == this.trueValue) {
            this.memory = true
            return
          }

          if (value != this.falseValue) {
            throw new Error('Unknown value for toggle: ' + value)
          }

          this.memory = false
        }
      },

      /**
       * Helper property used for tracking the field's value.
       * 
       * @type {any}
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

      /**
       * Helper property used to determine the element's 'null' value.
       * 
       * @type {boolean}
       * @ignore
       */
      null() {
        return false
      }
    },
    methods: {
      /**
       * Inits the element.
       * 
       * @private 
       * @returns {void}
       */
      $_initElement() {
        this.$_copy([
          'labels', 'speed', 'text', 'trueValue',
          'falseValue',
        ])

        this.value = this.defaultValue !== null
          ? this.defaultValue
          : this.null

        if (this.schema.dimensions) {
          this.dimensions = Object.assign({}, this.dimensions, this.schema.dimensions)
        }

        if (this.schema.colors) {
          this.colors = Object.assign({}, this.colors, this.schema.colors)
          this.cssColors = false
        }
      }
    }
  }
</script>