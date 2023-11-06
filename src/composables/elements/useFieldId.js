import { toRefs, computed } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    id,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const parent = dependencies.parent
  
  // ============== COMPUTED ==============
  
  /**
   * The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.
   *
   * @type {string}
   */
  const fieldId = computed(() => {
    return id.value || (parent.value?.fieldId ? `${parent.value?.fieldId}.${name.value}` : name.value)
  })
  
  return {
    fieldId,
  }
}

export default base