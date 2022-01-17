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
      classes,
      mainClass,
      templates,
      theme,
      defaultClasses,
    } = useElementComponent(props, context)

    return {
      el$,
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