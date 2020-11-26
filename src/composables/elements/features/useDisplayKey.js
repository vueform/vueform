import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * The name of object key which contains the address that should be displayed to the user in the input
   * field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using
   * [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: "formatted_address".
   * 
   * @type {string}
   */
  const displayKey = computedOption('displayKey', schema, 'formatted_address')

  return {
    displayKey,
  }
}