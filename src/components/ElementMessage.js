import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementMessage',
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
    const message = computed(() => {
      return el$.value.messageBag ? el$.value.messageBag.message : null
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      components,
      message,
    }
  },
}