import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Value of the radio button.
   * 
   * @type {str|num|bool}
   * @default "1"
   */
  const radioValue = computedOption('radioValue', schema, 1)

  return {
    radioValue,
  }
}

export default base