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
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The floating label of the element, defined via `floating` prop.
     * 
     * @type {string}
     */
    const floating = computed(() => {
      return el$.value.floating || (form$.value.options.floatPlaceholders ? el$.value.placeholder : null)
    })
    
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      floating,
    }
  },
}