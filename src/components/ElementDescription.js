import { computed } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementDescription',
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
     * The element's description, defined via `:description` prop.
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
  
    /**
     * Returns the slot component if defined in [`slots`](#option-slots) object.
     * 
     * @type {component}
     * @private
     */
    const slotComponent = computed(() => {
      return el$.value.slots?.description || undefined
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      description,
      isSlot,
      slotComponent,
    }
  },
}