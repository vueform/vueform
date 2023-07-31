import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    loading,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const pending = dependencies.pending
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element is in loading state.
   *
   * @type {boolean}
   */
  const isLoading = computed(() => {
    return pending.value || loading.value
  })
  
  return {
    isLoading,
  }
}

export default base