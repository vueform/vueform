import { computed, getCurrentInstance } from 'vue'
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
   * @type {VueformComponent}
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
      templates: Templates.value,
      view: View.value,
      merge: [
        form$.value.options,
        el$.value,
      ],
    }))
  })

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    return classesInstance.value.classes
  })

  /**
   * The list of templates available to the component.
   * 
   * @type {object}
   * @private
   */
  const Templates = computed(() => {
    return el$.value.Templates
  })

  /**
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return View.value && Templates.value[`${componentName.value}_${View.value}`]
            ? Templates.value[`${componentName.value}_${View.value}`]
            : Templates.value[componentName.value]
  })

  return {
    el$,
    form$,
    theme,
    Size,
    View,
    classesInstance,
    classes,
    Templates,
    template,
  }
}

export default base