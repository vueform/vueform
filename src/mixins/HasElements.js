export default {
  computed: {
    /**
     * Returns the list of elements which should be required by the component.
     * 
     * @returns {array}
     * @ignore
     */
    elements_() {
      return []
    },
    
    /**
     * Returns the list of components which should be required by the component.
     * 
     * @returns {array}
     * @ignore
     */
    components_() {
      return []
    }
  },
  beforeMount() {
    _.each(this.form$.$options.components, (component, name) => {
      if (/Element$/.test(name) && this.elements_.indexOf(name.toLowerCase().replace('element', '')) !== -1) {
        this.$options.components[name] = component
      }

      if (this.components_.indexOf(name) !== -1) {
        this.$options.components[name] = component
      }
    })
  }
}