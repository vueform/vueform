import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============== COMPUTED ==============

  /**
  * The 'id' attribute of the field.
  * 
  * @type {string} 
  * @default null
  */
  const id = computedOption('id', schema, name.value)

  return {
    id,
  }
}