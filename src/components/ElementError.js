import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementError',
  init(props, context)
  {
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============
    
    const error = computed(() => {
      return el$.value.error
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      classes,
      components,
      error,
    }
  },
}