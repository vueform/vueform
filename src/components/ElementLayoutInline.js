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
      let classList = _.clone(baseClasses.value)

      // Add element's main class to main class
      classList = mergeComponentClasses(classList, {
        [mainClass.value]: el$.value.classes[el$.value.mainClass]
      })

      return classList
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