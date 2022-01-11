import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'
import MergeComponentClasses from './../../utils/mergeComponentClasses'

const base = function(props, context, dependencies, options = {})
{
  const {
    addClasses,
    overrideClasses,
    addClass,
  } = toRefs(props)
  
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const theme = dependencies.theme
  const templates = dependencies.templates

  const template = templates.value[componentName.value]

  // ================ DATA ================

  /**
  * The default classes for the element defined by theme.
  * 
  * @type {object}
  * @private
  */
  const defaultClasses = ref(template.data ? template.data().defaultClasses : {})
  const mergeDefaultClasses = ref(template.data ? template.data().mergeDefaultClasses : 'before')

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
   * The selected theme's classes merged with [`addClasses`](#option-extend-classes) and [`overrideClasses`](#option-replace-classes) options.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    let classes = new MergeComponentClasses(
      mergeDefaultClasses.value == 'after' ? theme.value.classes[componentName.value] : defaultClasses.value,
      componentName.value
    )

    console.log('merged (base):', classes.classes)

    classes.merge({
      overrideClasses: {
        [componentName.value]: mergeDefaultClasses.value == 'after'
          ? defaultClasses.value
          : theme.value.classes[componentName.value],
      }
    })

    console.log('merged (extended):', classes.classes)

    classes.merge(form$.value.$vueform.config)

    console.log('merged (after config):', classes.classes)

    form$.value.$vueform.config.usePresets.forEach((presetName) => {
      classes.merge(form$.value.$vueform.config.presets[presetName])
    })

    console.log('merged (after presets):', classes.classes)

    // Add classes defined by specific elements
    if (options.addClasses) {
      options.addClasses.forEach((add) => {
        if (add[2].value) {
          console.log(add)
          classes.mergeComponent({
            addClasses: {
              [add[0]]: typeof add[1] == 'object' ? add[1].value : classes.classes[add[1]],
            }
          })
        }
      })
    }
    
    console.log('merged (after built in adds):', classes.classes)

    // _.each(classes, (classList, componentName) => {
    //   _.each(classList, (c, className) => {
    //     if (typeof c === 'string') {
    //       classes[componentName][className] = c.split(' ')
    //     } else if (_.isPlainObject(c)) {
    //       classes[componentName][className] = [c] 
    //     }
    //   })
    // })

    // _.each(form$.value.config.preset, (preset) => {
    //   _.each(preset.override, (overrides, componentName) => {
    //     _.each(overrides, (override, className) => {
    //       classes[componentName][className] = override
    //     })
    //   })

    //   _.each(preset.remove, (removes, componentName) => {
    //     _.each(removes, (remove, className) => {
    //       _.each(remove, (r) => {
    //         classes[componentName][className] = classes[componentName][className].filter((c) => {
    //           if (typeof c === 'string') {
    //             return c !== r
    //           } else if (_.isPlainObject(c)) {
    //             return c[r] === undefined ? true : false
    //           }
    //         })
    //       })
    //     })
    //   })
    // })

    

    // // Add form's addClasses
    // if (form$.value.options.addClasses[componentName.value] !== undefined) {
    //   classes = mergeComponentClasses(classes, form$.value.options.addClasses[componentName.value] || null)
    // }
    
    // // Add element's addClasses options
    // classes = mergeComponentClasses(classes, addClasses.value[componentName.value] || null)
    
    // // Add element's class to main class
    // if (addClass.value) {
    //   classes = mergeComponentClasses(classes, {
    //     [mainClass.value]: addClass.value
    //   })
    // }

    // classes = addClassHelpers(form$.value, componentName.value, classes)

    return classes.classes
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
  } = toRefs(props)

  const {
    mainClass,
    classes,
    defaultClasses,
  } = base(props, context, dependencies, {
    addClasses: [
      ['list', 'list_file', computed(() => view.value === 'file')],
      ['list', 'list_image', computed(() => view.value === 'image')],
      ['list', 'list_gallery', computed(() => view.value === 'gallery')],
      ['list', 'list_sorting', computed(() => sorting.value)],
      ['list', 'list_disabled', computed(() => isDisabled.value)],
      ['listItem', 'listItem_file', computed(() => view.value === 'file')],
      ['listItem', 'listItem_image', computed(() => view.value === 'image')],
      ['listItem', 'listItem_gallery', computed(() => view.value === 'gallery')],
      ['handle', 'handle_file', computed(() => view.value === 'file')],
      ['handle', 'handle_image', computed(() => view.value === 'image')],
      ['handle', 'handle_gallery', computed(() => view.value === 'gallery')],
      ['handleIcon', 'handleIcon_file', computed(() => view.value === 'file')],
      ['handleIcon', 'handleIcon_image', computed(() => view.value === 'image')],
      ['handleIcon', 'handleIcon_gallery', computed(() => view.value === 'gallery')],
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

const editor = function(props, context, dependencies)
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
  editor,
}

export default base