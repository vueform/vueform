import { computed } from 'composition-api'

export default function useEmpty(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const nill = dependencies.nill

  // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */
  const empty = computed(() => {
    return value.value == nill.value || value.value === ''
  })

  return {
    empty,
  }
}