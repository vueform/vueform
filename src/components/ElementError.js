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
      Size,
      View,
      classesInstance,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============
    
    /**
     * The first error of the element.
     * 
     * @type {string}
     */
    const error = computed(() => {
      return el$.value.error
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      templates,
      template,
      error,
    }
  },
}