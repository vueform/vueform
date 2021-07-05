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
  setup(props, context)
  {
    const { type } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', 'container_before', computed(() => type.value == 'before')],
        ['container', 'container_between', computed(() => type.value == 'between')],
        ['container', 'container_after', computed(() => type.value == 'after')],
      ]
    })

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
      defaultClasses,
      components,
      content,
    }
  },
}