import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLoader',
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      $size,
      $view,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    return {
      el$,
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
    }
  },
}