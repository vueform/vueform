import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLayoutInline',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
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
      templates,
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
      templates,
      template,
      classes,
      visible,
      // hasLabel,
    }
  },
}