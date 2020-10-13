import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'InputAddon',
  props: {
    type: {
      required: true,
      type: String
    },
  },
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, el$, classes, components, theme } = useElementComponent(props, context)

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      components,
      classes,
    }
  },
  computed: {
    baseAddon() {
      return this.el$.addons[this.type]
    },
    addon() {
      return this.isAddonFunction
        ? this.baseAddon(this.el$)
        : this.baseAddon || null
    },
    isAddonFunction() {
      return typeof this.baseAddon === 'function' && 
             (!this.baseAddon.prototype || !this.baseAddon.prototype.constructor || (this.baseAddon.prototype.constructor && this.baseAddon.prototype.constructor.name !== 'VueComponent'))
    },
    isAddonComponent() {
      return typeof this.baseAddon === 'function' && 
             this.baseAddon.prototype &&
             this.baseAddon.prototype.constructor.name === 'VueComponent'
    },
  }
}