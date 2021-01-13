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

    const { form$, theme, classes, mainClass, components } = useFormComponent(props, context)

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      mainClass,
      components,
    }
  },
}