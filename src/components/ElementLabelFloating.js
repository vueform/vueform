import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLabelFloating',
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, context)
  {    
    const { visible } = toRefs(props)

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
      ['label', 'labelInvisible', computed(() => !visible.value)],
      ['label', 'labelVisible', computed(() => visible.value)],
    ]
  })

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const floating = computed(() => {
      return el$.value.floating
    })
    
    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      floating,
    }
  },
}