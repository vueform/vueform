import { computed } from 'composition-api'

export default function useNestedLayout(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components

  // ============== COMPUTED ==============

  const layout = computed({
    get() {
      return components.value.NestedElementLayout
    }
  })

  return {
    // Computed
    layout,
  }
}