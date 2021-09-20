import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementInfo',
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The info for the element, defined via `:info` prop.
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
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      info,
      isSlot,
    }
  },
}