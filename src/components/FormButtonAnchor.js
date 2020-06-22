import FormButton from './FormButton'

export default {
  name: 'FormButtonAnchor',
  mixins: [FormButton],
  props: {
    /**
     * Button options.
     * 
     * @default {
     *  "label": { "type": "string", "description": "Button label;" },
     *  "class": { "type": "string", "description": "Button class." },
     *  "href": { "type": "string", "description": "Href attribute." },
     *  "target": { "type": "string", "description": "Anchort target attribute. (default: `_self`)" },
     *  "beforeCreate": { "type": "function", "description": "Triggered in the button's `beforeCreate` lifecycle hook." },
     *  "created": { "type": "function", "description": "Triggered in the button's `created` lifecycle hook." },
     *  "beforeMount": { "type": "function", "description": "Triggered in the button's `beforeMount` lifecycle hook." },
     *  "mounted": { "type": "function", "description": "Triggered in the button's `mounted` lifecycle hook." },
     *  "beforeUpdate": { "type": "function", "description": "Triggered in the button's `beforeUpdate` lifecycle hook." },
     *  "updated": { "type": "function", "description": "Triggered in the button's `updated` lifecycle hook." },
     *  "beforeDestroy": { "type": "function", "description": "Triggered in the button's `beforeDestroy` lifecycle hook." },
     *  "destroyed": { "type": "function", "description": "Triggered in the button's `destroyed` lifecycle hook." }
     * }
     */
    button: {
      type: Object,
      required: true
    },
  },
  computed: {
    href() {
      return this.button.href || null
    },

    target() {
      return this.button.target || '_self'
    },

    /**
     * Determines if the button is disabled.
     * 
     * @private
     * @type {boolean}
     */
    disabled() {
      return false
    },

    /**
     * Determines if the button is in loading state.
     * 
     * @private
     * @type {boolean}
     */
    loading() {
      return false
    }
  }
}