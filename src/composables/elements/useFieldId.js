import { toRefs, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    name,
    id,
  } = toRefs(props)

  // ============== COMPUTED ==============
  
  /**
   * The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.
   * 
   * @type {string}
   */
  const fieldId = computed(() => {
    return id.value || name.value
  })

  return {
    fieldId,
  }
}

export default base