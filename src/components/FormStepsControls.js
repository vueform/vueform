import { provide } from 'vue'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormStepsControls',
  slots: ['previous', 'next', 'finish'],
  props: {
    labels: {
      type: Boolean,
      required: false,
      default: true,
    },
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

    // ============== PROVIDE ===============

    provide('View', View)

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
    }
  },
}