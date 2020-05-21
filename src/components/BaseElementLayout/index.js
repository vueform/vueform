export default {
  name: 'BaseElementLayout',
  inject: ['el$'],
  provide() {
    const _this = this
  
    return {
      get el$ () {
        return _this.el$
      },
    }
  },
  computed: {
    theme() {
      return this.el$.theme
    },
    classes() {
      return _.merge({},
        // Default component classes
        this.defaultClasses,

        // Global / form level overwrites
        this.theme.classes[this.$options.name] || {},

        // Element level overwrites
        this.el$.classes[this.$options.name] || {}
      )
    },
  }
}