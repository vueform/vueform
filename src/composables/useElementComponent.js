import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import { mergeComponentClasses } from './../utils/mergeClasses'

const base = function(props, context, dependencies, options = {})
{
  const componentName = context.name
  const { defaultClasses: _defaultClasses } = toRefs(context.data)

  // =============== INJECT ===============

  const {
    form$
  } = useForm$(props, context)
  
  const {
    el$
  } = useEl$(props, context)

  const {
    theme
  } = useTheme(props, context)
  
  // ================ DATA =================

  /**
  * 
  * 
  * @private
  */
  const defaultClasses = ref(_defaultClasses.value)

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
      theme.value.classes[componentName.value] || {},

      // Element level overwrites
      el$.value.overrideClasses[componentName.value] || {}
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
    if (form$.value.options.addClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.options.addClasses[componentName.value] || null)
    }

    // Add element's addClasses options
    classes = mergeComponentClasses(classes, el$.value.addClasses[componentName.value] || null)

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
    return el$.value.components
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
    el$,
    form$,
    theme,
    classes,
    components,
    mainClass,
    defaultClasses,
  }
}

export default base