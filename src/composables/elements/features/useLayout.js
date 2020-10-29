import { computed } from 'composition-api'

export default function useLayout(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components

  // ============== COMPUTED ==============

  const layout = computed({
    get() {
      return components.value.ElementLayout
    }
  })

  return {
    // Computed
    layout,
  }
}