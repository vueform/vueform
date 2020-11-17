import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Description of the element.
   * 
   * @type {string} 
   * @default null
   */
  const description = computedOption('description', schema, null)

  return {
    description,
  }
}