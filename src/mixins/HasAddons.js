export default {
  computed: {
    /**
     * An object containing `before` and `after` properties, representing the contents of the input's before and after addons.
     * 
     * @type {object}
     * @default {}
     */
    addon: {
      get() {
        return this.schema.addon !== undefined ? this.schema.addon : {}
      },
      set(value) {
        this.$set(this.schema, 'addon', value)
      }
    },

    /**
     * Helper property used to determine internally if the element has any addons.
     * 
     * @type {boolean}
     * @ignore
     */
    hasAddon() {
      return this.schema.addon !== undefined
    }
  },
}