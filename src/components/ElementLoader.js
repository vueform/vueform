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
      theme,
      classes,
      templates,
      template,
    }
  },
}