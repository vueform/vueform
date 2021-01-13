import { ref } from 'composition-api'
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
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, mainClass, components } = useFormComponent(props, context)

    const { component } = useElements(props, context, { theme })

    // ================ DATA ================
    
    const elements$ = ref([])

    return {
      // Inject
      form$,
      theme,

      // Data
      elements$,

      // Computed
      classes,
      mainClass,
      components,

      // Methods
      component,
    }
  },
}