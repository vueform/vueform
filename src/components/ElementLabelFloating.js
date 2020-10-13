import useElementComponent from './../composables/useElementComponent'

  export default {
    name: 'ElementLabelFloating',
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
    props: {
      visible: {
        type: Boolean,
        default: false,
      }
    },
  }