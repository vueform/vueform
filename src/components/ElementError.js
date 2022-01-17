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
      $size,
      classes,
      templates,
      mainClass,
      theme,
      defaultClasses,
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
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      error,
    }
  },
}