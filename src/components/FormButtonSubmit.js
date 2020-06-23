import FormButton from './FormButton'

export default {
  name: 'FormButtonSubmit',
  mixins: [FormButton],
  props: {
    /**
     * Button options.
     * 
     * @default {
     *  "label": { "type": "string", "description": "Button label;" },
     *  "class": { "type": "string", "description": "Button class." },
     *  "onClick": { "type": "function", "description": "Handling submit button click. Receives `form$` as first param. If not defined it will submit the form by default." },
     *  "disabled": { "type": "function", "description": "A method to determine when the button should be disabled. If not defined it will be true if the form's `disabled` property is `true`." },
     *  "loading": { "type": "function", "description": "A method to determine when the button should be in loading state (`loading` class added). If not defined it will be true if the form's `submitting` property is `true`." },
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
    /**
     * Determines if the button is disabled.
     * 
     * @type {boolean}
     */
    disabled() {
      if (this.button.disabled !== undefined) {
        return this.button.disabled(this.form$)
      }

      return this.form$.disabled
    },

    /**
     * Determines if the button should be in loading state.
     * 
     * @type {boolean}
     */
    loading() {
      if (this.button.loading !== undefined) {
        return this.button.loading(this.form$)
      }

      return this.form$.submitting
    }
  },
  methods: {
    /**
     * Handles button click
     *
     * @private 
     * @returns {void}
     */
    handleClick() {
      if (this.disabled || this.loading) {
        return
      }

      if (this.button.onClick !== undefined) {
        this.button.onClick(this.form$)
        return
      }

      this.form$.submit()
    }
  }
}