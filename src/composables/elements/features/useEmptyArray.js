import { computed } from 'composition-api'

export default function(props, context, dependencies)
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
    return _.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1 || value.value.length == 0
  })

  return {
    empty,
  }
}