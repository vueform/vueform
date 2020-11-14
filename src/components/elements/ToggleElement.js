import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import useToggle from './../../composables/elements/useToggle'

export default {
  name: 'ToggleElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  init: useToggle,
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
      * The vue-js-toggle-button component.
      * 
      * @type {object} 
      * @default null
      */
      toggle$: null,
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
        return this.currentValue ? this.trueValue : this.falseValue
      },
      set(value) {
        this.model = value == this.trueValue
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
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    /**
    * Text to appear next to the toggle.
    * 
    * @type {string} 
    * @default null
    */
    text: {
      get() {
        return this.schema.text !== undefined ? this.schema.text : null
      },
      set(value) {
        this.$set(this.schema, 'text', value)
      }
    },

    /**
     * Value of the element if toggle is *on*.
     * 
     * @type {str|num|bool}
     * @default true
     */
    trueValue: {
      get() {
        return this.schema.trueValue !== undefined ? this.schema.trueValue : true
      },
      set(value) {
        this.$set(this.schema, 'trueValue', value)
      }
    },

    /**
     * Value of the element if toggle is *off*.
     * 
     * @type {str|num|bool}
     * @default false
     */
    falseValue: {
      get() {
        return this.schema.falseValue !== undefined ? this.schema.falseValue : false
      },
      set(value) {
        this.$set(this.schema, 'falseValue', value)
      }
    },

    /**
    * Labels to be displayed for the toggle. If `false` no labels are displayed.
    * 
    * @type {object} 
    * @default false
    */
    labels: {
      get() {
        return this.schema.labels !== undefined ? this.schema.labels : false
      },
      set(value) {
        this.$set(this.schema, 'labels', value)
      }
    },
    
    /**
    * The speed of toggle animation in milliseconds.
    * 
    * @type {number} 
    * @default 300
    */
    speed: {
      get() {
        return this.schema.speed !== undefined ? this.schema.speed : 300
      },
      set(value) {
        this.$set(this.schema, 'speed', value)
      }
    },

    /**
    * Dimensions of the toggle input. Default: `{ width: 50, height: 22 }`
    * 
    * @type {object} 
    * @default {...}
    */
    dimensions: {
      get() {
        return Object.assign({}, {
          width: 50,
          height: 22,
        }, this.schema.dimensions || {})
      },
      set(value) {
        this.$set(this.schema, 'dimensions', value)
      }
    },

    /**
    * Colors of the toggle input. Default: `{ background: '#777777', handle: '#FFFFFF' }`
    * 
    * @type {object} 
    * @default {...}
    */
    colors: {
      get() {
        return Object.assign({}, {
          background: '#777777',
          handle: '#FFFFFF',
        }, this.schema.colors || {})
      },
      set(value) {
        this.$set(this.schema, 'colors', value)
      }
    },

    /**
    * Whether the toggle should use CSS colors. Turns to `false` if `colors` is defined.
    * 
    * @type {boolean} 
    * @default true
    * @ignore
    */
    cssColors: {
      get() {
        return this.schema.cssColors !== undefined ? this.schema.cssColors : this.schema.colors === undefined
      },
      set(value) {
        this.$set(this.schema, 'cssColors', value)
      }
    },

    /**
    * Whether to watch for element value changes and sync it with the toggle
    * 
    * @type {boolean} 
    * @default true
    * @ignore
    */
    sync: {
      get() {
        return this.schema.sync !== undefined ? this.schema.sync : true
      },
      set(value) {
        this.$set(this.schema, 'sync', value)
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
        sync: this.sync,
        labels: this.labels,
        speed: this.speed,
        width: this.dimensions.width,
        height: this.dimensions.height,
        color: this.colors.background,
        switchColor: this.colors.handle,
        cssColors: this.cssColors,
        disabled: this.disabled,
      }
    },

    /**
    * Additional [options](https://github.com/euvl/vue-js-toggle-button#properties) for vue-js-toggle-button.
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
     * @type {boolean}
     * @ignore
     */
    null() {
      return this.falseValue
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
      this.value = this.defaultValue !== null
        ? _.clone(this.defaultValue)
        : _.clone(this.null)
    }
  },
  created() {
    this.previousValue = false
  },
  mounted() {
    this.toggle$ = this.$refs.toggle$
  },
}