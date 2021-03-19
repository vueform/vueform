import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormErrors',
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const errors = computed(() => {
      return form$.value.formErrors
    })

    return {
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      errors,
    }
  },
}