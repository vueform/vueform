import { computed } from 'composition-api'

export default function useBaseLayout(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components

  // ============== COMPUTED ==============

  const layout = computed({
    get() {
      return components.value.BaseElementLayout
    }
  })

  return {
    // Computed
    layout,
  }
}