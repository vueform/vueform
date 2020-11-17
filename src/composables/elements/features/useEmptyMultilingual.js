import { computed } from 'composition-api'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const nullValue = dependencies.nullValue
  const language = dependencies.language

  // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */
  const empty = computed(() => {
    return value.value[language.value] == nullValue.value[language.value] || value.value[language.value] === ''
  })

  return {
    empty,
  }
}