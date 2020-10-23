import { computed, toRefs } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default function useElementComponent(props, context, dependencies)
{
  const componentName = context.name
  const { defaultClasses } = toRefs(context.data)

  // =============== INJECT ===============

  const { form$ } = useForm$(props, context)
  const { el$ } = useEl$(props, context)
  const { theme } = useTheme(props, context)
  
  // ============== COMPUTED ===============

  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses.value,

      // Theme / form level overwrites
      theme.value.classes[componentName.value] || {},

      // Element level overwrites
      el$.value.schema.classes ? el$.value.schema.classes[componentName.value] : {}
    )

    // Add form's addClasses
    if (form$.value.addClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.addClasses[componentName.value] || null)
    }

    // Add element's addClasses options
    classes = mergeComponentClasses(classes, el$.value.addClasses[componentName.value] || null)

    return classes
  })

  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.value.classes = val
    }
  })

  const components = computed(() => {
    return el$.value.components
  })

  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  return {
    // Inject
    el$,
    form$,
    theme,

    // Computed
    classes,
    components,
    mainClass,
  }
}