import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormStepsControls',
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

    return {
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
    }
  },
}