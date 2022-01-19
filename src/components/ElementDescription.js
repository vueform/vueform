import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementDescription',
  slots: ['default'],
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      $size,
      $view,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The element's description, defined via the element's `description` option.
     * 
     * @type {string}
     */
    const description = computed(() => {
      return el$.value.description
    })

    /**
     * Whether the description is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.description || el$.value.$slots?.description || (context.expose === undefined && el$.value.$scopedSlots?.description))
    })

    return {
      el$,
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
      description,
      isSlot,
    }
  },
}