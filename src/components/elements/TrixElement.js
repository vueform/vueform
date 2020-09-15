import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'

export default {
  name: 'TrixElement',
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "accept": { "type": "array", "description": "Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`." },
     *  "acceptMimes": { "type": "array", "description": "Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`." },
     *  "endpoint": { "type": "string", "description": "Endpoint to be called to upload attachments." },
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
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
      * The trix editor's component.
      * 
      * @type {object}
      * @default null
      */
      trix$: null,

      /**
       * Helper property used to store available events for the element.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: ['change', 'alert']
    }
  },
  computed: {

    /**
    * Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`.
    * 
    * @type {array}
    * @default []
    */
    accept: {
      get() {
        return this.schema.accept !== undefined ? this.schema.accept : []
      },
      set(value) {
        this.$set(this.schema, 'accept', value)
      }
    },

    /**
    * Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`.
    * 
    * @type {array}
    * @default []
    */
    acceptMimes: {
      get() {
        return this.schema.acceptMimes !== undefined ? this.schema.acceptMimes : []
      },
      set(value) {
        this.$set(this.schema, 'acceptMimes', value)
      }
    },

    /**
    * Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`.
    * 
    * @type {string}
    * @default '...'
    */
    endpoint: {
      get() {
        return this.schema.endpoint !== undefined ? this.schema.endpoint : this.$laraform.config.endpoints.elements.trix.attachment
      },
      set(value) {
        this.$set(this.schema, 'endpoint', value)
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string} 
    * @default null
    */
    placeholder: {
      get() {
        return this.schema.placeholder !== undefined ? this.schema.placeholder : null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },
  },
  methods: {
    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @returns {void}
     */
    update(value) {
      this.trix$.update(value)
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      if (this.disabled) {
        return
      }

      this.trix$.update(this.default)
    },

    /**
     * Clears the value of the element.
     *
     * @public
     * @returns {void}
     */
    clear() {
      this.trix$.update(this.null)
    },

    /**
     * Triggered when the trix editor fires an alert event (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.
     *
     * @public
     * @param {string} message message to display.
     * @event alert
     */
    handleAlert(message) {
      this.fire('alert', message)

      if (!this.listeners.alert) {
        alert(message)
      } 
    },
  },
  mounted() {
    this.trix$ = this.$refs.trix$
  }
}