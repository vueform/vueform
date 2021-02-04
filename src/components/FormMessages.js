import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormMessages',
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const messages = computed(() => {
      return form$.value.formMessages
    })

    return {
      form$,
      theme,
      classes,
      mainClass,
      components,
      messages,
    }
  },
}