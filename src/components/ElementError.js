import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementError',
  init(props, context)
  {
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, mainClass, components, theme } = useElementComponent(props, context)

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
      mainClass,
      components,
      error,
    }
  },
}