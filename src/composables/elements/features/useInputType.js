import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useInputType(props, context, dependencies)
{
  const schema = props.schema
  
  // ============== COMPUTED ==============

  /**
   * The HTML type of input field (like type="text").
   * 
   * @type {string}
   * @default 'text'
   */
  const inputType = computed(computedOption('inputType', schema, 'text'))

  return {
    inputType,
  }
}