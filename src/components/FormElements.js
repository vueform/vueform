import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useElements from './../composables/useElements'

export default {
  name: 'FormElements',
  slots: ['default'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
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
      $view,
      theme,
      classes,
      templates,
      template,
      schema,
      component,
    }
  },
}