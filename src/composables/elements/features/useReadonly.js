import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Whether the element should be readonly.
   * 
   * @type {boolean} 
   * @default false
   */
  const readonly = computedOption('readonly', schema, false)

  return {
    readonly,
  }
}

export default base