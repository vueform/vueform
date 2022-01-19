import { provide } from 'composition-api'
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
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
    } = useFormComponent(props, context)

    // ============== PROVIDE ===============

    provide('$view', $view)

    return {
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
    }
  },
}