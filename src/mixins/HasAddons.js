export default {
    data() {
      return {

        /**
         * An object containing `before` and `after` properties, representing the contents of the input's before and after addons.
         * 
         * @type {object}
         * @default {}
         */
        addon: {
          before: null,
          after: null,
        },
      }
    },

    computed: {
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

    methods: {
      /**
       * Returns a certain type of addon.
       * 
       * @private 
       * @param {string} type the type of addon to be returned
       * @returns {void}
       */
      $_addon(type) {
        return this.schema.addon && this.schema.addon[type]
          ? this.schema.addon[type]
          : null
      },
    },
    
    created() {
      this.addon = {
        before: this.$_addon('before'),
        after: this.$_addon('after'),
      }
    },
}