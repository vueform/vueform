import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function (props, context, dependencies, options_ = {})
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Determines whether `required` rules should be added to address fields. Default: `false`
   * 
   * @type {boolean}
   * @default false
   */
  const required = computedOption('required', schema, false)

  return {
    required,
  }
}

export default base