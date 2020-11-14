import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useReadonly(props, context, dependencies)
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