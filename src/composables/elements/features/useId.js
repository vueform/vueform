import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useId(props, context, dependencies)
{
  const schema = props.schema
  const name = props.name

  // ============== COMPUTED ==============

  /**
  * The 'id' attribute of the field.
  * 
  * @type {string} 
  * @default null
  */
  const id = computed(computedOption('id', schema, name))

  return {
    id,
  }
}