import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementError',
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============
    
    /**
     * 
     * 
     * @private
     */
    const error = computed(() => {
      return el$.value.error
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      components,
      error,
    }
  },
}