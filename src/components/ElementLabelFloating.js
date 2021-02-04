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
      const floating = computed(() => {
        return el$.value.floating
      })
      

      return {
        el$,
        form$,
        theme,
        classes,
        mainClass,
        components,
        floating,
      }
    },
  }