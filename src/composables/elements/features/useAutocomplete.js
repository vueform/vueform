import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
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

export default base