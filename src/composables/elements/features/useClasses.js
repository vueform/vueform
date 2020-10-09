import computedOption from './../../../utils/computedOption'
import { mergeComponentClasses } from './../../../utils/mergeClasses'
import { computed, toRefs } from 'composition-api'

export default function useClasses(props, context, dependencies)
{
  const { schema } = toRefs(props)
  const componentName = context.name
  const defaultClasses = context.data.defaultClasses

  // ============ DEPENDENCIES ============

  const { form$ } = dependencies.form$
  const { theme } = dependencies.theme

  // ============== PRIVATE ===============

  // ============== COMPUTED ==============
  
  /**
  * Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object).
  * 
  * @type {string} 
  * @default null
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses)[0]
  })

  /**
  * Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list.
  * 
  * @type {object} 
  * @default {}
  */
  const addClasses = computed(computedOption('addClasses', schema, {}))

  /**
   * Returns the final classes of the components within the element.
   * 
   * @type {object}
   */
  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses,

      // Theme / form level overwrites
      theme.classes[componentName] || {},

      // Element level overwrites
      schema.classes ? schema.classes[componentName] : {}
    )

    // Add form's addClasses if classes is not defined in element
    if (!schema.classes || _.isEmpty(schema.classes[componentName])) {
      classes = mergeComponentClasses(classes, form$.addClasses[componentName] || null)
    }

    // Add element's addClasses options
    classes = mergeComponentClasses(classes, addClasses.value[componentName] || null)

    return classes
  })

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   */
  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.classes = val
    }
  })

  /**
  * Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object).
  * 
  * @type {string} 
  * @default null
  */
  const class_ = computed(computedOption('class', schema, ''))

  return {
    class: class_,
    classes,
    mainClass,
    addClasses,
    defaultClasses,
  }
}