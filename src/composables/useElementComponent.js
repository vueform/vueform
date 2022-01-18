import _ from 'lodash'
import { computed, toRefs, ref, getCurrentInstance } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import use$Size from './use$Size'
import useView from './useView'
import MergeFormClasses from './../utils/mergeFormClasses'

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
    $size
  } = use$Size(props, context)

  const {
    view
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
      view: view.value,
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
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return view.value && templates.value[`${componentName.value}_${view.value}`]
            ? templates.value[`${componentName.value}_${view.value}`]
            : templates.value[componentName.value]
  })

  return {
    el$,
    form$,
    theme,
    $size,
    view,
    classes,
    templates,
    template,
  }
}

export default base