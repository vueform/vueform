import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
  * The floating label of the element.
  * 
  * @type {string}
  * @default null
  */
  const floating = computedOption('floating', schema, null)

  return {
    floating,
  }
}

export default base