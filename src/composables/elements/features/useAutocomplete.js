import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
   * The `autocomplete` attribute of the input field.
   * 
   * @type {boolean}
   * @default true
   */
  const autocomplete = computedOption('autocomplete', schema, false)

  return {
    autocomplete,
  }
}

export default base