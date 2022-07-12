import { computed } from 'vue'
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
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
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
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      schema,
      component,
    }
  },
}