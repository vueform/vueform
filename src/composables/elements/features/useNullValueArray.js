import { computed } from 'composition-api'

export default function(props, context, dependencies)
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