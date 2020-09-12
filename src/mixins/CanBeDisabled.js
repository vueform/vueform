export default {
  computed: {
    /**
     * Whether the field should be *disabled* for user input (API updates are possible).
     * 
     * @type {boolean} 
     * @default false
     */
    disabled: {
      get() {
        return this.schema.disabled !== undefined ? this.schema.disabled : false
      },
      set(value) {
        this.$set(this.schema, 'disabled', value)
      }
    }
  },
  methods: {
    /**
     * Disabled the field.
     *
     * @public
     * @returns {void}
     */
    disable() {
      this.disabled = true
    },

    /**
     * Enables the field.
     *
     * @public
     * @returns {void}
     */
    enable() {
      this.disabled = false
    },
  }
}