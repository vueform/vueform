import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const min = dependencies.min

  // ============== COMPUTED ===============

  const nullValue = computed(() => {
    return min.value
  })
  
  return {
    // Computed
    nullValue,
  }
}