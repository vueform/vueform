import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useInputType(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
   * The HTML type of input field (like type="text").
   * 
   * @type {string}
   * @default 'text'
   */
  const inputType = computedOption('inputType', schema, 'text')

  return {
    inputType,
  }
}