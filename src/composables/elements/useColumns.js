import cloneDeep from 'lodash/cloneDeep'
import { computed, toRefs, ref, watch } from 'vue'

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
  
  // ================ DATA ================
  
  const Columns = ref(cloneDeep(columns.value))
  
  
  // ============== COMPUTED ==============
  
  /**
   * The classes service instance.
   *
   * @type {Columns}
   * @private
   */
  const columnsClassesService = computed(() => {
    let config = form$.value.$vueform.config
    
    return (new form$.value.$vueform.services.columns({
      configPresetColumns: config.usePresets,
      configColumns: config.columns,
      formPresetColumns: form$.value.options.presets,
      formColumns: form$.value.options.columns,
      elementPresetColumns: presets.value,
      elementColumns: Columns.value,
    }, hasLabel.value, theme.value.columns, config.presets))
  })
  
  /**
   * Calculated column sizes and classes for the element.
   *
   * @type {object}
   * @private
   */
  const columnsClasses = computed(() => {
    return columnsClassesService.value.classes
  })
  
  /**
   * The `cols` property of the Columns service instance.
   *
   * @type {object}
   * @private
   */
  const cols = computed(() => {
    return columnsClassesService.value.cols
  })
  
  // =============== METHODS ==============
  
  /**
   * Update columns programmatically.
   *
   * @param {number|array} value* the new value for columns option
   * @returns {void}
   * @private
   */
  const updateColumns = (v) => {
    Columns.value = cloneDeep(v)
  }
  
  watch(columns, (v) => {
    Columns.value = cloneDeep(v)
  }, { immediate: false, deep: true })
  
  return {
    cols,
    columnsClassesService,
    columnsClasses,
    updateColumns,
  }
}

export default base