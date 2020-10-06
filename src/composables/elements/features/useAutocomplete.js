import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useAutocomplete(props, context, dependencies)
{
  const schema = props.schema
  
  // ============== COMPUTED ==============

  /**
   * The value of HTML autocomplete attribute if other than `false`. 
   * 
   * @type {boolean}
   * @default true
   */
  const autocomplete = computed(computedOption('autocomplete', schema, false))

  return {
    autocomplete,
  }
}