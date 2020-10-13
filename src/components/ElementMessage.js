import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementMessage',
  init(props, context)
  {    
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      classes,
      components,
    }
  },
  computed: {
    message() {
      return this.el$.messageBag ? this.el$.messageBag.message : null
    }
  }
}