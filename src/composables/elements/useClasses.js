import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'
import MergeFormClasses from './../../utils/mergeFormClasses'

const base = function(props, context, dependencies, options = {})
{
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const theme = dependencies.theme
  const templates = dependencies.templates
  const View = dependencies.View

  // ============== COMPUTED ==============

  /**
   * The selected theme's classes merged with [`addClasses`](#option-extend-classes) and [`overrideClasses`](#option-replace-classes) options.
   * 
   * @type {object}
   */
  const classes = computed(() => {
    return (new MergeFormClasses({
      component: componentName.value,
      component$: el$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: templates.value,
      view: View.value,
      merge: [
        form$.value,
        el$.value,
      ],
    })).classes
  })

  return {
    classes,
  }
}

export default base