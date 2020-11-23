import { computed, markRaw } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components

  // ============== COMPUTED ==============

  const layout = computed({
    get() {
      return markRaw(components.value.ElementLayout)
    }
  })

  return {
    // Computed
    layout,
  }
}

export default base