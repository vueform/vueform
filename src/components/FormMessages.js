import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormMessages',
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
     * Form messages including element messages and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */
    const messages = computed(() => {
      return form$.value.formMessages
    })

    return {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      messages,
    }
  },
}