import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectNoOptions',
  setup(props, context)
  {
    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * Whether the no options is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.$slots?.option || (context.expose === undefined && el$.value.$scopedSlots?.option))
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      isSlot,
    }
  },
}