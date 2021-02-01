import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Info icon appears next to the element's label.
   * 
   * @type {string} 
   * @default null
   */
  const info = computedOption('info', schema, null)

  return {
    info,
  }
}

export default base