import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementDescription',
  init(props, context)
  {
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, mainClass, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const description = computed(() => {
      return el$.value.description
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
      description,
    }
  },
}