import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import HasAddons from './../../mixins/HasAddons'
import $model from './../../directives/$model'

export default {
  name: 'PasswordElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, HasAddons, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
     *  "addon": { "type": "object", "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
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
  }
}