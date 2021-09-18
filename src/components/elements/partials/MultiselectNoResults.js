import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectNoResults',
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
     * Whether the no results is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.$slots?.['no-results'] || (context.expose === undefined && el$.value.$scopedSlots?.['no-results']))
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