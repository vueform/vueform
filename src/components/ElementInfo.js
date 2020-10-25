import { computed, ref, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import computedOption from './../utils/computedOption'

export default {
  name: 'ElementInfo',
  init(props, context)
  {
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const info = computed(() => {
      return el$.value.info
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      classes,
      components,
      info,
    }
  },
}