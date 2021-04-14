import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

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
    classes: baseClasses,
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
    const classes = computed(() => {
      return mergeComponentClasses(_.clone(baseClasses.value), {
        [mainClass.value]: {
          [baseClasses.value.visible]: visible.value,
        },
      })
    })

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