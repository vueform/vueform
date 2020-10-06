import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useDescription(props, context, dependencies)
{
  const schema = props.schema

  // ============== COMPUTED ==============

  /**
   * Description of the element.
   * 
   * @type {string} 
   * @default null
   */
  const description = computed(computedOption('description', schema, null))

  return {
    description,
  }
}