import { computed, toRefs } from 'composition-api'

export default function useNullValueBoolean(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const falseValue = dependencies.falseValue

  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return falseValue.value
  })
  
  return {
    // Computed
    nullValue,
  }
}