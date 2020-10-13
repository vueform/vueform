import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormErrors',
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
    }
  },
  computed: {
    errors() {
      return this.form$.messageBag.errors
    }
  },
}