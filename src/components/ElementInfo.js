import { computed, ref, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import computedOption from './../utils/computedOption'

export default {
  name: 'ElementInfo',
  init(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme
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
      components,
      info,
    }
  },
}