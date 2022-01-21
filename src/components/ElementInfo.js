import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementInfo',
  slots: ['default'],
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The info for the element, defined via the element's `info` prop.
     * 
     * @type {string}
     */
    const info = computed(() => {
      return el$.value.info
    })
  
    /**
     * Whether the info is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.info || el$.value.$slots?.info || (context.expose === undefined && el$.value.$scopedSlots?.info))
    })

    return {
      el$,
      form$,
      Size,
      View,
      theme,
      classes,
      templates,
      template,
      info,
      isSlot,
    }
  },
}