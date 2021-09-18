import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSingleLabel',
  props: {
    value: {
      required: true
    },
  },
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
     * Whether the single label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.$slots?.['single-label'] || (context.expose === undefined && el$.value.$scopedSlots?.['single-label']))
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