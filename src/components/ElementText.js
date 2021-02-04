import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementText',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  init(props, context)
  {
    const { type } = toRefs(props)

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
    const content = computed(() => {
      return el$.value[type.value]
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      components,
      content,
    }
  },
}