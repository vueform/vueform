import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementMessage',
  init(props, context)
  {    
    // ============ DEPENDENCIES ============

    const { el$, form$, classes, mainClass, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const message = computed(() => {
      return el$.value.messageBag ? el$.value.messageBag.message : null
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
      message,
    }
  },
}