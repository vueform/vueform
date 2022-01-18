import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormStepsControls',
  slots: ['previous', 'next', 'finish'],
  props: {
    labels: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      theme,
      classes,
      templates,
      template,
    } = useFormComponent(props, context)

    return {
      form$,
      $size,
      theme,
      classes,
      templates,
      template,
    }
  },
}