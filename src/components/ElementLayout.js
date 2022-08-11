import { computed } from 'vue'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLayout',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    multiple: {
      type: [Boolean],
      required: false,
      default: false,
    },
    view: {
      type: [String],
      required: false,
      default: undefined,
    },
  },
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return el$.value.visible
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      Templates,
      template,
      classes,
      visible,
    }
  },
}