import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Info icon appears next to the element's label.
   * 
   * @type {string} 
   * @default null
   * @ignore
   */
  const info = computedOption('info', schema, false)

  return {
    info,
  }
}