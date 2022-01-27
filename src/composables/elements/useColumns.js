import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    columns,
    presets,
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
   * @private
   */
  const columnsClasses = computed(() => {
    let config = form$.value.$vueform.config

    return (new form$.value.$vueform.services.columns({
      configPresetColumns: config.usePresets,
      configColumns: config.columns,
      formPresetColumns: form$.value.options.presets,
      formColumns: form$.value.options.columns,
      elementPresetColumns: presets.value,
      elementColumns: columns.value,
    }, hasLabel.value, theme.value.columns, config.presets)).classes
  })

  return {
    columnsClasses,
  }
}

export default base