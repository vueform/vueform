export default {
  computed: {

    descriptor() {
      return this.schema
    },
    
    /**
     * Triggered in the element's `created` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    created: {
      get() {
        return this.descriptor.created || null
      },
    },
    
    /**
     * Triggered in the element's `beforeMount` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    beforeMount: {
      get() {
        return this.descriptor.beforeMount || null
      },
    },
    
    /**
     * Triggered in the element's `mounted` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    mounted: {
      get() {
        return this.descriptor.mounted || null
      },
    },
    
    /**
     * Triggered in the element's `beforeUpdate` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    beforeUpdate: {
      get() {
        return this.descriptor.beforeUpdate || null
      },
      set(value) {
        this.$set(this.schema, 'beforeUpdate', value)
      }
    },
    
    /**
     * Triggered in the element's `updated` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    updated: {
      get() {
        return this.descriptor.updated || null
      },
      set(value) {
        this.$set(this.schema, 'updated', value)
      }
    },
    
    // /**
    //  * Triggered in the element's `beforeDestroy` lifecycle hook.
    //  * 
    //  * @type {function} 
    //  * @default null
    //  */
    // beforeDestroy: {
    //   get() {
    //     return this.descriptor.beforeDestroy || null
    //   },
    //   set(value) {
    //     this.$set(this.descriptor, 'beforeDestroy', value)
    //   }
    // },
    
    // /**
    //  * Triggered in the element's `destroyed` lifecycle hook.
    //  * 
    //  * @type {function} 
    //  * @default null
    //  */
    // destroyed: {
    //   get() {
    //     return this.descriptor.destroyed || null
    //   },
    //   set(value) {
    //     this.$set(this.descriptor, 'destroyed', value)
    //   }
    // },
  },
  created() {
    if (this.created) {
      this.created.apply(this)
    }
  },
  beforeMount() {
    if (this.beforeMount) {
      this.beforeMount.apply(this)
    }
  },
  mounted() {
    if (this.mounted) {
      this.mounted.apply(this)
    }
  },
  beforeUpdate() {
    if (this.beforeUpdate) {
      this.beforeUpdate.apply(this)
    }
  },
  updated() {
    if (this.updated) {
      this.updated.apply(this)
    }
  },
  // beforeDestroy() {
  //   if (this.beforeDestroy) {
  //     this.beforeDestroy()
  //   }
  // },
  // destroyed() {
  //   if (this.destroyed) {
  //     this.destroyed()
  //   }
  // },
}