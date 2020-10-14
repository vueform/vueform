import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormErrors',
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const errors = computed(() => {
      return form$.value.messageBag.errors
    })

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
      errors,
    }
  },
}