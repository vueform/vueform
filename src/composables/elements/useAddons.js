import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    addons
  } = toRefs(props)

  // ============== COMPUTED ==============
  
  /**
   * Helper property used to determine internally if the element has any addons.
   * 
   * @type {boolean}
   */
  const hasAddon = computed(() => Object.keys(addons.value).length > 0)

  return {
    hasAddon,
  }
}

export default base