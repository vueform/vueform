import { computed } from 'vue'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormMessages',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
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
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      messages,
    }
  },
}