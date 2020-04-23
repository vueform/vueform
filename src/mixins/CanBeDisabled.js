export default {
  data() {
    return {
      /**
       * Whether the field is *disabled*.
       * 
       * @type {boolean} 
       * @default false
       */
      disabled: false,
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