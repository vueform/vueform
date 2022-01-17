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
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context)

    return {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
    }
  },
}