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
     * 
     * 
     * @private
     */
    const info = computed(() => {
      return el$.value.info
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
    }
  },
}