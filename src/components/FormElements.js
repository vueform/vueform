import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useElements from './../composables/useElements'

export default {
  name: 'FormElements',
  slots: ['default'],
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      component
    } = useElements(props, context, { theme })

    // ============ COMPUTED ============

    /**
     * 
     * 
     * @private
     */
    const schema = computed(() => {
      return form$.value.options.schema
    })

    return {
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      schema,
      component,
    }
  },
}