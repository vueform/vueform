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
  const classKeys = toRefs(context.data).classKeys || {}

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
    if (form$.value.options.addClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.options.addClasses[componentName.value] || null)
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
    classKeys,
  }
}

const list = function(props, context, dependencies)
{
  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    classKeys
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const sorting = dependencies.sorting

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
      [classKeys.value.list]: {
        [classes.disabled]: isDisabled.value,
        [classes.sorting]: sorting.value,
      },
    })

    return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    classKeys,
  }
}

const multifile = function(props, context, dependencies)
{
  const {
    view,
  } = toRefs(props)

  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    classKeys
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const sorting = dependencies.sorting

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
      [classKeys.value.list]: {
        [classes.listDefault]: view.value !== 'gallery',
        [classes.listGallery]: view.value === 'gallery',
        [classes.sorting]: sorting.value,
        [classes.disabled]: isDisabled.value,
      },
      [classKeys.value.listItem]: {
        [classes.listItemDefault]: view.value !== 'gallery',
        [classes.listItemGallery]: view.value === 'gallery',
      },
    })

    return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    classKeys,
  }
}

const file = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    classKeys
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
    classKeys
  }
}

const button = function(props, context, dependencies)
{
  const {
    buttonClass,
    align,
  } = toRefs(props)

  const {
    mainClass,
    classes: baseClasses,
    defaultClasses,
    classKeys
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const isLoading = dependencies.isLoading
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
      [classKeys.value.button]: {
        [classes[classKeys.value[align.value]]]: true,
        [classes[classKeys.value.loading]]: isLoading.value,
        [classes[classKeys.value.disabled]]: isDisabled.value,
      }
    })

    if (buttonClass.value) {
      classes = mergeComponentClasses(classes, {
        [classKeys.value.button]: buttonClass.value
      })
    }

    return classes
  })

  return {
    classes,
    mainClass,
    defaultClasses,
    classKeys
  }
}

export {
  list,
  file,
  button,
  multifile,
}

export default base