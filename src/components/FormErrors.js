import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormErrors',
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============


    /**
     * Form errors including element errors and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */
    const errors = computed(() => {
      return form$.value.formErrors
    })

    return {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      errors,
    }
  },
}