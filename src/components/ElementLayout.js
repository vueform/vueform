import { computed, toRefs, onBeforeUpdate } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'ElementLayout',
  props: {
    multiple: {
      type: [Boolean],
      required: false,
      default: false,
    },
  },
  setup(props, context)
  {
    const { multiple } = toRefs(props)
    const { classKeys } = toRefs(context.data)

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

      classList = mergeComponentClasses(classList, {
        [classKeys.value.element]: el$.value.columnsObject.classes.element,
        [classKeys.value.field]: el$.value.columnsObject.classes.field,
        [classKeys.value.outerWrapper]: multiple.value
          ? classList[classKeys.value.outerWrapperMultiple]
          : classList[classKeys.value.outerWrapperSingle],
      })

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
    const info = computed(() => {
      return el$.value.info
    })

    /**
     * 
     * 
     * @private
     */
    const before = computed(() => {
      return el$.value.before
    })

    /**
     * 
     * 
     * @private
     */
    const between = computed(() => {
      return el$.value.between
    })

    /**
     * 
     * 
     * @private
     */
    const after = computed(() => {
      return el$.value.after
    })

    /**
     * 
     * 
     * @private
     */
    const description = computed(() => {
      return el$.value.description
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
      classes,
      mainClass,
      defaultClasses,
      classKeys,
      visible,
      hasLabel,
      info,
      before,
      between,
      after,
      description,
    }
  },
}