import { computed } from 'composition-api'
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
  },
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
      $size,
      classes,
      templates,
      mainClass,
      theme,
      defaultClasses,
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
      $size,
      theme,
      templates,
      classes,
      mainClass,
      defaultClasses,
      visible,
    }
  },
}