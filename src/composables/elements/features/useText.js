import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  const text = computedOption('text', schema, '')

  return {
    text,
  }
}

export default base