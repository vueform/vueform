import { mergeComponentClasses } from './../utils/mergeClasses'
import { computed } from 'composition-api'
import useForm$ from './useForm$'
import useTheme from './useTheme'

export default function useFormComponent(props, context, dependencies)
{
  const componentName = context.name
  const defaultClasses = context.data.defaultClasses


  // ============ DEPENDENCIES ============

  const { form$ } = useForm$(props, context)
  const { theme } = useTheme(props, context)
  
  // ============== COMPUTED ===============

  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses,

      // Theme / form level overwrites
      theme.classes[componentName] || {}
    )

    // Add form's addClasses
    classes = mergeComponentClasses(classes, form$.addClasses[componentName] || null)

    return classes
  })

  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.classes = val
    }
  })

  const components = computed(() => {
    return theme.components
  })

  const mainClass = computed(() => {
    return _.keys(defaultClasses)[0]
  })

  return {
    classes,
    components,
    mainClass,
  }
}