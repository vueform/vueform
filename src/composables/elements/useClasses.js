import { computed } from 'vue'
import MergeClasses from './../../utils/mergeClasses'

const base = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const componentName = context.name
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  const component$ = dependencies.component$ || dependencies.el$
  const theme = dependencies.theme
  const Templates = dependencies.Templates
  const View = dependencies.View
  
  // ============== COMPUTED ==============
  
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
    return {
      ...classesInstance.value?.classes,
    }
  })
  
  return {
    classes,
    classesInstance,
  }
}

export default base