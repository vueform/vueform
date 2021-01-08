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

    const { el$, form$, classes, mainClass, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const content = computed(() => {
      return el$.value[type.value]
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      classes,
      mainClass,
      components,
      content,
    }
  },
}