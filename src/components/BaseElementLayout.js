import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'BaseElementLayout',
  init(props, context)
  {
    const { containers } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const { form$, el$, classes, components, mainClass, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const updatedClasses = computed(() => {
      let classList = classes.value

      classList = mergeComponentClasses(classList, {
        [containers.value.element]: el$.value.columns.classes.element || '',
        [containers.value.label]: el$.value.columns.classes.label || '',
        [containers.value.field]: el$.value.columns.classes.field || '',
      })

      // Add element's main class to main class
      classList = mergeComponentClasses(classList, {
        [mainClass.value]: el$.value.classes[el$.value.mainClass]
      })

      return classList
    })

    const hasLabel = computed(() => {
      return el$.value.hasLabel
    })

    const info = computed(() => {
      return el$.value.info
    })

    const before = computed(() => {
      return el$.value.before
    })

    const between = computed(() => {
      return el$.value.between
    })

    const after = computed(() => {
      return el$.value.after
    })

    const description = computed(() => {
      return el$.value.description
    })

    const visible = computed(() => {
      return el$.value.visible
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      components,
      classes: updatedClasses,
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