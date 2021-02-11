import useFormComponent from './../composables/useFormComponent'
import useElements from './../composables/useElements'

export default {
  name: 'FormElements',
  props: {
    schema: {
      type: Object,
      required: true
    },
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    const {
      component
    } = useElements(props, context, { theme })

    return {
      form$,
      theme,
      classes,
      mainClass,
      components,
      component,
    }
  },
}