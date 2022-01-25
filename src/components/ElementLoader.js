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
      Templates,
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
      Templates,
      template,
    }
  },
}