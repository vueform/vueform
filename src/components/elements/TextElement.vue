<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import HasAddons from './../../mixins/HasAddons'

  export default {
    name: 'TextElement',
    mixins: [BaseElement, BaseValidation, HasAddons],
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
    data () {
      return {
        /**
         * The HTML type of input field (like type="text").
         * 
         * @type {string}
         * @default 'text'
         */
        type: 'text',

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {string} 
        * @default null
        */
        defaultValue: null,

        /**
        * The placeholder of the element.
        * 
        * @type {string} 
        * @default null
        */
        placeholder: null,

        /**
        * The floating label of the element.
        * 
        * @type {string} 
        * @default null
        */
        floating: null,

        /**
        * Whether the field is *disabled*.
        * 
        * @type {boolean} 
        * @default false
        */
        disabled: false,

        /**
        * Whether the field is *readonly*.
        * 
        * @type {boolean} 
        * @default false
        */
        readonly: false,
        
        /**
         * Whether the input field should have HTML autocomplete.
         * 
         * @type {boolean}
         * @default true
         */
        autocomplete: true,

        /**
         * If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur.
         * 
         * @type {number}
         * @default null
         */
        debounce: null,

        /**
         * Mask to be applied for the field using [text-mask](https://github.com/text-mask/text-mask). If `false` no mask is used.
         * 
         * @type {array|false}
         * @default false
         */
        mask: false,

        /**
         * Whether the mask is in in *guide* or *no guide* mode.
         * 
         * @type boolean
         * @default true
         */
        guide: true,

        /**
         * Placeholder character represents the fillable spot in the mask.
         * 
         * @type {string}
         * @default '_'
         */
        placeholderChar: '_',

        /**
         * If `true`, adding or deleting characters will not affect the positions of existing characters. If `false`, adding characters causes existing characters to advance and deleting characters causes existing characters to move back.
         * 
         * @type {boolean}
         * @default false
         */
        keepCharPositions: false,

        /**
         * A function that will give you the opportunity to modify the conformed value before it is displayed on the screen when masked.
         * 
         * @type {function}
         * @default null
         */
        pipe: null,

        /**
         * Whether to display the mask as a placeholder in place of the regular placeholder when the input element value is empty.
         * 
         * @type {boolean}
         * @default true
         */
        showMask: true,
      }
    },
    computed: {
      /**
       * Determines if the element is masked.
       * 
       * @type {boolean}
       */
      masked() {
        return this.schema.mask !== undefined
      },
    },
    created() {
      this.$_copy([
        'autocomplete', {'inputType': 'type'}, 'mask', 'guide',
        'placeholderChar', 'keepCharPositions',
        'pipe', 'showMask', 'debounce',
      ])

      if (this.schema.placeholder) {
        // disable showMask by default
        // if a placeholder is given
        this.showMask = false
      }
    },
  }
</script>