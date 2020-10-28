import { computed } from 'composition-api'

export default function useObjectNullValue(props, context, dependencies)
{
  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return {}
  })
  
  return {
    // Computed
    nullValue,
  }
}