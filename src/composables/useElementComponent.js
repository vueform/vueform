import _ from 'lodash'
import { computed, toRefs, ref, getCurrentInstance } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import use$Size from './use$Size'
import MergeFormClasses from './../utils/mergeFormClasses'

const base = function(props, context, dependencies, options = {})
{
  const {
    view,
  } = toRefs(props)

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
    $size
  } = use$Size(props, context)
  
  const template = el$.value.templates[componentName.value]
  
  // ================ DATA =================

  /**
  * The default classes for the component defined by theme.
  * 
  * @type {object}
  * @private
  */
  const defaultClasses = ref(template.data ? template.data().defaultClasses : {})

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
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */
  const mergedClasses = computed(() => {
    return (new MergeFormClasses({
      component: componentName.value,
      component$: component$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: templates.value,
      merge: [
        form$.value,
        el$.value,
      ],
    })).classes
  })

  /**
   * The selected theme's classes merged with element's `addClasses` and `overrideClasses` options.
   * 
   * @type {object}
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
   * Returns the component templates used by the parent element.
   * 
   * @type {object}
   */
  const templates = computed(() => {
    return el$.value.templates
  })

  /**
  * The class name of the components's outermost DOM.
  * 
  * @type {string}
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  return {
    el$,
    form$,
    theme,
    $size,
    classes,
    templates,
    mainClass,
    defaultClasses,
  }
}

export default base