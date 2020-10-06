import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useInfo(props, context, dependencies)
{
  const schema = props.schema

  // ============== COMPUTED ==============

  /**
   * Info icon appears next to the element's label.
   * 
   * @type {string} 
   * @default null
   * @ignore
   */
  const info = computed(computedOption('info', schema, false))

  return {
    info,
  }
}