import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLoader',
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      templates,
      template,
    }
  },
}