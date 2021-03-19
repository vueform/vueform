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
     * 
     * 
     * @private
     */
    const description = computed(() => {
      return el$.value.description
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
    }
  },
}