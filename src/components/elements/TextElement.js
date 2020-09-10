import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import $model from './../../directives/$model'

export default {
  name: 'TextElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  computed: {
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
        return this.schema.autocomplete !== undefined ? autocomplete : false
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
        return this.schema.mask !== undefined ? mask : false
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
        return this.schema.guide !== undefined ? guide : true
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
        return this.schema.placeholderChar !== undefined ? placeholderChar : '_'
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
        return this.schema.keepCharPositions !== undefined ? keepCharPositions : false
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
        return this.schema.pipe !== undefined ? pipe : null
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
        return this.schema.showMask !== undefined ? showMask : true
      },
      set(value) {
        this.$set(this.schema, 'showMask', value)
      }
    },
  }
}