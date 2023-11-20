import isEqual from 'lodash/isEqual'
import { computed } from 'vue'

const base = function(props, context, dependencies)
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
    return isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1
  })
  
  return {
    empty,
  }
}

const multilingual = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const value = dependencies.value
  const nullValue = dependencies.nullValue
  const language = dependencies.language
  
  // ============== COMPUTED ==============
  
  const empty = computed(() => {
    return value.value[language.value] == nullValue.value[language.value] || value.value[language.value] === ''
  })
  
  return {
    empty,
  }
}

const array = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const value = dependencies.value
  const nullValue = dependencies.nullValue
  
  // ============== COMPUTED ==============
  
  const empty = computed(() => {
    return isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1 || value.value.length == 0
  })
  
  return {
    empty,
  }
}

export {
  array,
  multilingual,
}

export default base