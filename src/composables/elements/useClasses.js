import _ from 'lodash'
import { computed, toRefs } from 'composition-api'
import { mergeComponentClasses } from './../../utils/mergeClasses'

const base = function(props, context, dependencies, options = {})
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
  * The default classes for the element defined by theme.
  * 
  * @type {object}
  * @private
  */
  const defaultClasses = toRefs(context.data).defaultClasses

  // ============== COMPUTED ==============
  
  /**
  * The class name of the element's outermost DOM.
  * 
  * @type {string}
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  /**
   * An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
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

    // Add classes defined by specific elements
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
  }
}

const input = function(props, context, dependencies)
{
  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['input', 'input_enabled', computed(() => !isDisabled.value)],
      ['input', 'input_disabled', computed(() => isDisabled.value)],
    ]
  })

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

const list = function(props, context, dependencies)
{
  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['list', 'list_disabled', computed(() => isDisabled.value)],
      ['list', 'list_sorting', computed(() => sorting.value)],
    ]
  })

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const sorting = dependencies.sorting

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

const multifile = function(props, context, dependencies)
{
  const {
    view,
    image,
  } = toRefs(props)

  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['list', 'list_file', computed(() => !image.value)],
      ['list', 'list_image', computed(() => image.value && view.value !== 'gallery')],
      ['list', 'list_gallery', computed(() => image.value && view.value === 'gallery')],
      ['list', 'list_sorting', computed(() => sorting.value)],
      ['list', 'list_disabled', computed(() => isDisabled.value)],
      ['listItem', 'listItem_file', computed(() => !image.value)],
      ['listItem', 'listItem_image', computed(() => image.value && view.value !== 'gallery')],
      ['listItem', 'listItem_gallery', computed(() => image.value && view.value === 'gallery')],
      ['handle', 'handle_file', computed(() => !image.value)],
      ['handle', 'handle_image', computed(() => image.value && view.value !== 'gallery')],
      ['handle', 'handle_gallery', computed(() => image.value && view.value === 'gallery')],
      ['handleIcon', 'handleIcon_file', computed(() => !image.value)],
      ['handleIcon', 'handleIcon_image', computed(() => image.value && view.value !== 'gallery')],
      ['handleIcon', 'handleIcon_gallery', computed(() => image.value && view.value === 'gallery')],
      ['button', 'button_enabled', computed(() => !isDisabled.value && !preparing.value)],
      ['button', 'button_disabled', computed(() => isDisabled.value || preparing.value)],
    ]
  })

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const sorting = dependencies.sorting
  const preparing = dependencies.preparing

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

const file = function(props, context, dependencies)
{
  const {
    defaultClasses,
    mainClass,
    classes,
  } = base(props, context, dependencies, {
    addClasses: [
      ['container', 'container_removing', computed(() => removing.value)],
      ['button', 'button_enabled', computed(() => !isDisabled.value && !preparing.value)],
      ['button', 'button_disabled', computed(() => isDisabled.value || preparing.value)],
    ]
  })

  // ============ DEPENDENCIES ============

  const removing = dependencies.removing
  const isDisabled = dependencies.isDisabled
  const preparing = dependencies.preparing

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

const button = function(props, context, dependencies)
{
  const {
    buttonClass,
  } = toRefs(props)

  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['button', 'button_loading', computed(() => isLoading.value)],
      ['button', 'button_enabled', computed(() => !isDisabled.value && !isLoading.value)],
      ['button', 'button_disabled', computed(() => isDisabled.value)],
      ['button', buttonClass, buttonClass],
    ]
  })

  // ============ DEPENDENCIES ============

  const isLoading = dependencies.isLoading
  const isDisabled = dependencies.isDisabled

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

const trix = function(props, context, dependencies)
{
  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['input', 'input_enabled', computed(() => !isDisabled.value)],
      ['input', 'input_disabled', computed(() => isDisabled.value)],
      ['input', 'input_focused', computed(() => focused.value)],
    ]
  })

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const focused = dependencies.focused

  return {
    classes,
    mainClass,
    defaultClasses,
  }
}

export {
  input,
  list,
  file,
  button,
  multifile,
  trix,
}

export default base