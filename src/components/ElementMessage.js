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
      $size,
      classes,
      templates,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The first message of the element.
     * 
     * @type {string}
     */
    const message = computed(() => {
      return el$.value.messageBag ? el$.value.messageBag.message : null
    })

    return {
      el$,
      form$,
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      message,
    }
  },
}