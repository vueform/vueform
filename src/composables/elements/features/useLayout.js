import { computed, markRaw } from 'composition-api'

export default function(props, context, dependencies)
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