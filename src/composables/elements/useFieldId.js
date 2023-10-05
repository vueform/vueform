import { toRefs, computed } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    id,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const path = dependencies.path
  
  // ============== COMPUTED ==============
  
  /**
   * The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.
   *
   * @type {string}
   */
  const fieldId = computed(() => {
    return id.value || path.value
  })
  
  return {
    fieldId,
  }
}

export default base