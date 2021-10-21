import { toRefs, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    id,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const path = dependencies.path

  // ============== COMPUTED ==============
  
  /**
   * The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.
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