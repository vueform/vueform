import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    layout,
    inline,
  } = toRefs(props)
  
  // ============== COMPUTED ==============
  
  /**
   * The current layout of the element.
   *
   * @type {string|Component}
   * @private
   */
  const elementLayout = computed(() => {
    return inline.value || !layout.value ? 'ElementLayoutInline' : layout.value
  })
  
  return {
    elementLayout,
  }
}

export default base