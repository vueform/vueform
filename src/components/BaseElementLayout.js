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

      // Add element's class to main class
      if (el$.value.class !== null) {
        classList = mergeComponentClasses(classList, {
          [mainClass]: el$.value.class
        })
      }

      return classList
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      components,
      classes: updatedClasses,
    }
  },
  computed: {
    hasLabel() {
      return this.el$.hasLabel
    },
    before() {
      return this.el$.before
    },
    between() {
      return this.el$.between
    },
    after() {
      return this.el$.after
    },
    description() {
      return this.el$.description
    },
    visible (){
      return this.el$.visible
    } 
  }
}