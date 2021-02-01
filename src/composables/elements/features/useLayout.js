import { computed, markRaw } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {component}
   */
  const layout = computed({
    get() {
      return markRaw(components.value.ElementLayout)
    }
  })

  return {
    layout,
  }
}

export default base