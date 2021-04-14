import { computed, toRefs, onBeforeUpdate } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'ElementLayoutInline',
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
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
      let classes = _.clone(baseClasses.value)

      // Add element's main class to main class
      classes = mergeComponentClasses(classes, {
        [mainClass.value]: {
          [el$.value.classes[el$.value.mainClass]]: true,
          [classes.error]: !el$.value.isStatic ? !!el$.value.error : false
        }
      })

      return classes
    })

    /**
     * 
     * 
     * @private
     */
    const hasLabel = computed(() => {
      return el$.value.hasLabel
    })

    /**
     * 
     * 
     * @private
     */
    const visible = computed(() => {
      return el$.value.visible
    })

    return {
      el$,
      form$,
      theme,
      components,
      defaultClasses,
      classes,
      mainClass,
      hasLabel,
      visible,
    }
  },
}