import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useDebounce(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
  * If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur.
  * 
  * @type {number}
  * @default null
  */
  const debounce = computedOption('debounce', schema, null)

  return {
    debounce,
  }
}