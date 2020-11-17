import { computed, toRefs, watchEffect } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import { mergeComponentClasses } from './../../../utils/mergeClasses'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  const { defaultClasses } = toRefs(context.data)
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const theme = dependencies.theme

  // ============== COMPUTED ==============

  /**
  * Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list.
  * 
  * @type {object} 
  * @default {}
  */
  const addClasses = computedOption('addClasses', schema, {})

  /**
  * Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object).
  * 
  * @type {string} 
  * @default null
  */
  const class_ = computedOption('class', schema, '')
  
  /**
  * Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object).
  * 
  * @type {string} 
  * @default null
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  /**
   * Returns the final classes of the components within the element.
   * 
   * @type {object}
   */
  const classes = computed({
    get() {
      let classes = _.merge({},
        // Default component classes
        defaultClasses.value,

        // Theme / form level overwrites
        theme.value.classes[componentName.value] || {},

        // Element level overwrites
        schema.value.classes ? schema.value.classes[componentName.value] : {}
      )

      // Add form's addClasses
      if (form$.value.addClasses[componentName.value] !== undefined) {
        classes = mergeComponentClasses(classes, form$.value.addClasses[componentName.value] || null)
      }
      
      // Add element's addClasses options
      classes = mergeComponentClasses(classes, addClasses.value[componentName.value] || null)
      
      // Add element's class to main class
      if (!_.isEmpty(class_.value)) {
        classes = mergeComponentClasses(classes, {
          [mainClass.value]: class_.value
        })
      }

      return classes
    },
    set(val) {
      form$.value.$set(schema.value, 'classes', val)
    }
  })

  return {
    class: class_,
    classes,
    mainClass,
    addClasses,
    defaultClasses,
  }
}