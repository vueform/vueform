import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
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

export default base