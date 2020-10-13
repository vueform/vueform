import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  init(props, context)
  {    
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    const { label, isLabelComponent } = useLabel(props, context, { 
      descriptor: el$.value.schema,
      form$: form$,
      el$: el$,
     })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      classes,
      components,
      label,
      isLabelComponent,
    }
  },
  computed: {
    name() {
      return this.el$.name
    },
  },
}