import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  init(props, context)
  {    
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    const { label, isLabelComponent } = useLabel(props, context, { 
      descriptor: ref(el$.value.schema),
      el$: el$,
     })

    // ============== COMPUTED ==============

    const name = computed(() => {
      return el$.value.name
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
      name,
    }
  },
}