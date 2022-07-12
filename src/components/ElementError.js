import { computed } from 'vue'
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
      Templates,
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
      Templates,
      template,
      error,
    }
  },
}