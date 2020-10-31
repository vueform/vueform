import { computed } from 'composition-api'

export default function useArrayNullValue(props, context, dependencies)
{
  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return []
  })
  
  return {
    // Computed
    nullValue,
  }
}