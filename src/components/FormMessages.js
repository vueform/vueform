import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormMessages',
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
    messages() {
      return this.form$.messageBag.messages
    }
  },
}