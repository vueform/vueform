import { computed } from 'composition-api'

export default function useArrayType(props, context, dependencies)
{
  // ============== COMPUTED ==============

  const isArrayType = computed(() => {
    return true
  })

  return {
    isArrayType,
  }
}