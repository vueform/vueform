import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementError',
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
    error() {
      return this.el$.error
    }
  }
}