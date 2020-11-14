import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useAutocomplete(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
   * The value of HTML autocomplete attribute if other than `false`. 
   * 
   * @type {boolean}
   * @default true
   */
  const autocomplete = computedOption('autocomplete', schema, false)

  return {
    autocomplete,
  }
}