import { computed } from 'composition-api'

export default function(props, context, dependencies)
{
  // ============== COMPUTED ==============

  const isArrayType = computed(() => {
    return true
  })

  return {
    isArrayType,
  }
}