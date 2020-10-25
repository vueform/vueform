import { computed } from 'composition-api'

export default function useEmpty(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const nullValue = dependencies.nullValue

  // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */
  const empty = computed(() => {
    return value.value == nullValue.value || value.value === ''
  })

  return {
    empty,
  }
}