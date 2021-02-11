import { computed, toRefs } from 'composition-api'
import { mergeComponentClasses } from './../../utils/mergeClasses'

const base = function(props, context, dependencies)
{
  const {
    addClasses,
    overrideClasses,
    addClass
  } = toRefs(props)
  
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

  /**
  * 
  * 
  * @type {object} 
  */
  const containers = toRefs(context.data).containers || {}

  // ============== COMPUTED ==============
  
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
  const classes = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses.value,

      // Theme / form level overwrites
      theme.value.classes[componentName.value] || {},

      // Element level overwrites
      overrideClasses.value[componentName.value] || {}
    )

    // Add form's addClasses
    if (form$.value.addClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.addClasses[componentName.value] || null)
    }
    
    // Add element's addClasses options
    classes = mergeComponentClasses(classes, addClasses.value[componentName.value] || null)
    
    // Add element's class to main class
    if (addClass.value) {
      classes = mergeComponentClasses(classes, {
        [mainClass.value]: addClass.value
      })
    }

    return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    containers,
  }
}

const list = function(props, context, dependencies)
{
  const {
    sort,
  } = toRefs(props)

  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    containers
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   * @option
   */
  const classes = computed(() => {
    let classes = _.clone(baseClasses.value)

    classes = mergeComponentClasses(classes, {
      [containers.value.sortable]: {
        [classes.sortable]: sort.value
      },
      [containers.value.add]: {
        [classes.disabled]: isDisabled.value
      },
      [containers.value.remove]: {
        [classes.disabled]: isDisabled.value
      },
    })

    return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    containers,
  }
}

const file = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    containers
  } = base(props, context, dependencies)

  const removing = dependencies.removing

  // ============== COMPUTED ==============

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   * @option
   */
  const classes = computed(() => {
    let classes = _.clone(baseClasses.value)

      classes = mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes.removing]: removing.value,
        },
      })

      return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    containers
  }
}

export {
  list,
  file,
}

export default base