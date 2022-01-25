import _ from 'lodash'
import { computed, toRefs, ref, getCurrentInstance } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import useSize from './useSize'
import useView from './useView'
import MergeClasses from './../utils/mergeClasses'

const base = function(props, context, dependencies, options = {})
{
  const componentName = context.name

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

  const {
    Size
  } = useSize(props, context)

  const {
    View,
  } = useView(props, context)

  // ============== COMPUTED ===============

  /**
   * The component instance (self).
   * 
   * @type {component}
   */
  const component$ = computed(() => {
    return getCurrentInstance().proxy
  })

  /**
   * The classes instance (for testing purpose).
   * 
   * @type {MergeClasses}
   * @private
   */
  const classesInstance = computed(() => {
    return (new MergeClasses({
      component: componentName.value,
      component$: component$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: templates.value,
      view: View.value,
      merge: [
        form$.value.options,
        el$.value,
      ],
    }))
  })

  /**
   * The selected theme's classes merged with element's `addClasses` and `overrideClasses` options.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    return classesInstance.value.classes
  })

  /**
   * Returns the component templates used by the parent element.
   * 
   * @type {object}
   */
  const templates = computed(() => {
    return el$.value.templates
  })

  /**
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return View.value && templates.value[`${componentName.value}_${View.value}`]
            ? templates.value[`${componentName.value}_${View.value}`]
            : templates.value[componentName.value]
  })

  return {
    el$,
    form$,
    theme,
    Size,
    View,
    classesInstance,
    classes,
    templates,
    template,
  }
}

export default base