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
      $size,
      theme,
      classes,
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      component
    } = useElements(props, context, { theme })

    // ============ COMPUTED ============

    /**
     * The form schema.
     * 
     * @type {object}
     * @private
     */
    const schema = computed(() => {
      return form$.value.options.schema
    })

    return {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      schema,
      component,
    }
  },
}