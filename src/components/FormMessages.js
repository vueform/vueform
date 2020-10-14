import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormMessages',
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const messages = computed(() => {
      return form$.value.messageBag.messages
    })

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
      messages,
    }
  },
}