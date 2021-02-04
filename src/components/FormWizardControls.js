import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormWizardControls',
  props: {
    wizard$: {
      type: Object,
    },
  },
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    return {
      form$,
      theme,
      classes,
      mainClass,
      components,
    }
  },
}