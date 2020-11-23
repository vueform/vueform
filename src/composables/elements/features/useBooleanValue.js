import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Value of the element if checkbox is *checked*.
   * 
   * @type {str|num|bool}
   * @default true
   */
  const trueValue = computedOption('trueValue', schema, true)

  /**
   * Value of the element if checkbox is *unchecked*.
   * 
   * @type {str|num|bool}
   * @default false
   */
  const falseValue = computedOption('falseValue', schema, false)

  return {
    trueValue,
    falseValue,
  }
}

export default base