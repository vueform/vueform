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
      return form$.value.$vueform.sanitize(el$.value.error)
    })
    
    /**
     * Whether to show the error.
     * 
     * @type {boolean}
     */
    const showError = computed(() => {
      return error.value && el$.value.displayErrors
    })

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    const id = computed(() => {
      return el$.value.errorId
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
      showError,
      id,
    }
  },
}