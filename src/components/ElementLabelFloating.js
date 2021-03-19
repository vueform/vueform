import { computed } from 'composition-api'
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