import _ from 'lodash'
import { computed, toRefs } from 'composition-api'
import useForm$ from './useForm$'
import useTheme from './useTheme'
import { mergeComponentClasses } from './../utils/mergeClasses'

const base = function(props, context, dependencies, options = {})
{
  const componentName = context.name
  
  const { defaultClasses } = toRefs(context.data)

  // =============== INJECT ===============

  const {
    form$
  } = useForm$(props, context)

  const {
    theme
  } = useTheme(props, context)
  
  // ============== COMPUTED ===============

  /**
  * 
  * 
  * @private
  */
  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses.value,

      // Theme / form level overwrites
      theme.value.classes[componentName.value] || {}
    )

    // Add classes defined by specific components
    if (options.addClasses) {
      options.addClasses.forEach((add) => {
        if (add[2].value) {
          classes = mergeComponentClasses(classes, {
            [add[0]]: typeof add[1] == 'object' ? add[1].value : classes[add[1]],
          })
        }
      })
    }

    // Add form's addClasses
    classes = mergeComponentClasses(classes, form$.value.options.addClasses[componentName.value] || null)

    return classes
  })

  /**
  * 
  * 
  * @private
  */
  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.value.classes = val
    }
  })

  /**
  * 
  * 
  * @private
  */
  const components = computed(() => {
    return theme.value.components
  })

  /**
  * 
  * 
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  return {
    form$,
    theme,
    classes,
    components,
    mainClass,
    defaultClasses,
  }
}

export default base