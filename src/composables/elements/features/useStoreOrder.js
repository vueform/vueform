import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
  * The name of the element which should contain the order of the list item in case of an object list.
  * 
  * @type {string}
  * @default null
  */
  const storeOrder = computedOption('storeOrder', schema, null)

  return {
    storeOrder,
  }
}

export default base