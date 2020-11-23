import { computed } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============== COMPUTED ==============

  const isArrayType = computed(() => {
    return true
  })

  return {
    isArrayType,
  }
}

export default base