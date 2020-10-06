import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useReadonly(props, context, dependencies)
{
  const schema = props.schema

  // ============== COMPUTED ==============

  /**
   * Whether the element should be readonly.
   * 
   * @type {boolean} 
   * @default false
   */
  const readonly = computed(computedOption('readonly', schema, false))

  return {
    readonly,
  }
}