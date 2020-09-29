import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import HasAddons from './../../mixins/HasAddons'
import $model from './../../directives/$model'

export default {
  name: 'TextElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, HasAddons, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "inputType": { "type": "string", "description": "The 'type' attribute of the field." },
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
     *  "autocomplete": { "type": "boolean", "description": "Whether the 'autocomplete' attribute of the field should be on / off." },
     *  "mask": { "type": "array", "description": "Mask to be applied for the field using [text-mask](https://github.com/text-mask/text-mask)." },
     *  "guide": { "type": "boolean", "description": "Whether the mask is in in *guide* or *no guide* mode." },
     *  "placeholderChar": { "type": "string", "description": "Placeholder character represents the fillable spot in the mask." },
     *  "keepCharPositions": { "type": "boolean", "description": "If `true`, adding or deleting characters will not affect the positions of existing characters. If `false`, adding characters causes existing characters to advance and deleting characters causes existing characters to move back." },
     *  "pipe": { "type": "function", "description": "A function that will give you the opportunity to modify the conformed value before it is displayed on the screen when masked." },
     *  "showMask": { "type": "boolean", "description": "Whether to display the mask as a placeholder in place of the regular placeholder when the input element value is empty." },
     *  "addon": { "type": "object", "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons." },
     *  "debounce": { "type": "number", "description": "If provided each validators execution will be delayed by this amount of `milliseconds`." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  computed: {
    /**
     * The HTML type of input field (like type="text").
     * 
     * @type {string}
     * @default 'text'
     */
    inputType: {
      get() {
        return this.schema.inputType || 'text'
      },
      set(value) {
        this.$set(this.schema, 'inputType', value)
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
     * The value of HTML autocomplete attribute if other than `false`. 
     * 
     * @type {boolean}
     * @default true
     */
    autocomplete: {
      get() {
        return this.schema.autocomplete !== undefined ? this.schema.autocomplete : false
      },
      set(value) {
        this.$set(this.schema, 'autocomplete', value)
      }
    },

    /**
    * If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur.
    * 
    * @type {number}
    * @default null
    */
    debounce: {
      get() {
        return this.schema.debounce || null
      },
      set(value) {
        this.$set(this.schema, 'debounce', value)
      }
    },

    /**
     * Mask to be applied for the field using [text-mask](https://github.com/text-mask/text-mask). If `false` no mask is used.
     * 
     * @type {array|false}
     * @default false
     */
    mask: {
      get() {
        return this.schema.mask !== undefined ? this.schema.mask : false
      },
      set(value) {
        this.$set(this.schema, 'mask', value)
      }
    },

    /**
     * Whether the mask is in in *guide* or *no guide* mode.
     * 
     * @type boolean
     * @default true
     */
    guide: {
      get() {
        return this.schema.guide !== undefined ? this.schema.guide : true
      },
      set(value) {
        this.$set(this.schema, 'guide', value)
      }
    },

    /**
     * Placeholder character represents the fillable spot in the mask.
     * 
     * @type {string}
     * @default '_'
     */
    placeholderChar: {
      get() {
        return this.schema.placeholderChar !== undefined ? this.schema.placeholderChar : '_'
      },
      set(value) {
        this.$set(this.schema, 'placeholderChar', value)
      }
    },

    /**
     * If `true`, adding or deleting characters will not affect the positions of existing characters. If `false`, adding characters causes existing characters to advance and deleting characters causes existing characters to move back.
     * 
     * @type {boolean}
     * @default false
     */
    keepCharPositions: {
      get() {
        return this.schema.keepCharPositions !== undefined ? this.schema.keepCharPositions : false
      },
      set(value) {
        this.$set(this.schema, 'keepCharPositions', value)
      }
    },

    /**
     * A function that will give you the opportunity to modify the conformed value before it is displayed on the screen when masked.
     * 
     * @type {function}
     * @default null
     */
    pipe: {
      get() {
        return this.schema.pipe !== undefined ? this.schema.pipe : null
      },
      set(value) {
        this.$set(this.schema, 'pipe', value)
      }
    },

    /**
     * Whether to display the mask as a placeholder in place of the regular placeholder when the input element value is empty.
     * 
     * @type {boolean}
     * @default true
     */
    showMask: {
      get() {
        return this.schema.showMask !== undefined ? this.schema.showMask : !this.placeholder
      },
      set(value) {
        this.$set(this.schema, 'showMask', value)
      }
    },

    /**
     * Determines if the element is masked.
     * 
     * @type {boolean}
     */
    masked() {
      return this.mask !== false
    },
  },
  methods: {
    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @param {boolean} validate whether the element should be validated (default: `false`)
     * @returns {void}
     */
    update(value, triggerChange, validate) {
      if (triggerChange === undefined) {
        triggerChange = false
      }

      if (validate === undefined) {
        validate = false
      }

      this.value = value

      if (triggerChange) {
        this.handleChange()
      }

      if (validate) {
        this.validate()
      }

      if (this.masked) {
        this.$nextTick(() => {
          this.$refs.input.initMask()
        })
      }
    },
  },
  mounted() {
    if (this.masked) {
      this.$nextTick(() => {
        this.$refs.input.initMask()
      })
    }
  }
}