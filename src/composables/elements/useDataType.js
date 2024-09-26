import { toRefs, computed } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    inputType,
  } = toRefs(props)

  const {
    resolvedColumns,
  } = dependencies

  // =============== COMPUTED ==============

  const dataType = computed(() => {
    return resolvedColumns.value.some(c => c.inputType && !isEqual(c.inputType, inputType.value)) || (inputType.value !== 'radio' && inputType.value !== 'checkbox')
      ? 'object'
      : inputType.value === 'radio'
        ? 'assoc'
        : 'array'
  })
  
  return {
    dataType,
  }
}

export default base