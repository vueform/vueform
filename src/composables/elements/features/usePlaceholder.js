import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
  * The placeholder of the element.
  * 
  * @type {string}
  */
  const placeholder = computedOption('placeholder', schema, null)

  return {
    placeholder,
  }
}

export default base