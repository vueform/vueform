import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    columns,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const theme = dependencies.theme
  const hasLabel = dependencies.hasLabel

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object} 
   * @option
   */
  const columnsClasses = computed(() => {
    return (new theme.value.utils.columns(
      columns.value,
      form$.value.options.columns,
      form$.value.$laraform.config.columns,
      hasLabel.value,
      
    )).classes
  })

  return {
    columnsClasses,
  }
}

export default base