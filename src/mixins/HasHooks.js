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
      set(value) {
        this.$set(this.descriptor, 'created', value)
      }
    },
    
    /**
     * Triggered in the element's `beforeMount` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    beforeMount: {
      get() {
        return this.schema.beforeMount || null
      },
      set(value) {
        this.$set(this.schema, 'beforeMount', value)
      }
    },
    
    /**
     * Triggered in the element's `mounted` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    mounted: {
      get() {
        return this.schema.mounted || null
      },
      set(value) {
        this.$set(this.schema, 'mounted', value)
      }
    },
    
    /**
     * Triggered in the element's `beforeUpdate` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    beforeUpdate: {
      get() {
        return this.schema.beforeUpdate || null
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
        return this.schema.updated || null
      },
      set(value) {
        this.$set(this.schema, 'updated', value)
      }
    },
    
    /**
     * Triggered in the element's `beforeDestroy` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    beforeDestroy: {
      get() {
        return this.schema.beforeDestroy || null
      },
      set(value) {
        this.$set(this.schema, 'beforeDestroy', value)
      }
    },
    
    /**
     * Triggered in the element's `destroyed` lifecycle hook.
     * 
     * @type {function} 
     * @default null
     */
    destroyed: {
      get() {
        return this.schema.destroyed || null
      },
      set(value) {
        this.$set(this.schema, 'destroyed', value)
      }
    },
  },
  created() {
    if (this.descriptor.created) {
      this.descriptor.created()
    }
  },
  beforeMount() {
    if (this.descriptor.beforeMount) {
      this.descriptor.beforeMount()
    }
  },
  mounted() {
    if (this.descriptor.mounted) {
      this.descriptor.mounted()
    }
  },
  beforeUpdate() {
    if (this.descriptor.beforeUpdate) {
      this.descriptor.beforeUpdate()
    }
  },
  updated() {
    if (this.descriptor.updated) {
      this.descriptor.updated()
    }
  },
  beforeDestroy() {
    if (this.descriptor.beforeDestroy) {
      this.descriptor.beforeDestroy()
    }
  },
  destroyed() {
    if (this.descriptor.destroyed) {
      this.descriptor.destroyed()
    }
  },
}