import { computed, toRefs, watchEffect } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import { mergeComponentClasses } from './../../../utils/mergeClasses'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const theme = dependencies.theme

  // ================ DATA ================

  /**
  * 
  * 
  * @type {object} 
  */
  const defaultClasses = toRefs(context.data).defaultClasses

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
  * @default ""
  */
  const class_ = computedOption('class', schema, '')
  
  /**
  * Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object).
  * 
  * @type {string}
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  /**
   * Returns the final classes of the components within the element.
   * 
   * @type {object}
   * @option
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

const list = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  const { containers } = toRefs(context.data)

  // ============ DEPENDENCIES ============

  const { class: class_, mainClass, classes: baseClasses, addClasses, defaultClasses } = base(props, context, dependencies)

  const form$ = dependencies.form$
  const sort = dependencies.sort
  const disabled = dependencies.disabled

  // ============== COMPUTED ==============

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   * @option
   */
  const classes = computed({
    get() {
      let classes = baseClasses.value

      classes = mergeComponentClasses(classes, {
        [containers.value.sortable]: {
          [classes.sortable]: sort.value
        },
        [containers.value.add]: {
          [classes.disabled]: disabled.value
        },
        [containers.value.remove]: {
          [classes.disabled]: disabled.value
        },
      })

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

const file = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const { class: class_, mainClass, classes: baseClasses, addClasses, defaultClasses } = base(props, context, dependencies)

  const form$ = dependencies.form$
  const removing = dependencies.removing

  // ============== COMPUTED ==============

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   * @option
   */
  const classes = computed({
    get() {
      let classes = _.clone(baseClasses.value)

      classes = mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes.removing]: removing.value,
        },
      })

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

export {
  list,
  file,
}

export default base