import { toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  const items = computedOption('items', schema, {})

  return {
    items,
  }
}