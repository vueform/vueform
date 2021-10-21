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
    templates,
    mainClass,
    theme,
    defaultClasses,
  } = useElementComponent(props, context, {}, {
    addClasses: [
      ['label', 'label_invisible', computed(() => !visible.value)],
      ['label', 'label_visible', computed(() => visible.value)],
    ]
  })

    // ============== COMPUTED ==============

    /**
     * The floating label of the element, defined via `:floating` prop.
     * 
     * @type {string}
     */
    const floating = computed(() => {
      return el$.value.floating || (form$.value.options.floatPlaceholders ? el$.value.placeholder : null)
    })
    
    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      floating,
    }
  },
}