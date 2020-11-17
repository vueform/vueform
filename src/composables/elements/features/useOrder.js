import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isObject = dependencies.isObject
  const child$ = dependencies.child$

  // ============== COMPUTED ==============

  /**
  * The name of the element which should contain the order of the list item in case of an object list.
  * 
  * @type {string}
  * @default null
  */
  const storeOrder = computedOption('storeOrder', schema, null)

  /**
  * The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`.
  * 
  * @type {string}
  * @default null
  */
  const order = computedOption('order', schema, null)

  /**
  * When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise.
  * 
  * @type {string}
  * @default null
  */
  const orderBy = computedOption('orderBy', schema, storeOrder.value || null)

  // =============== METHODS ==============

  /**
   * Helper method used to refresh the element's value which stores the order.
   *
   * @private
   * @returns {void}
   */
  const refreshOrderStore = () => {
    if (isObject.value && storeOrder.value) {
      _.each(child$.value, (element$, index) => {
        element$.update({
          [storeOrder.value]: parseInt(index) + 1
        })
      })
    }
  }

  return {
    // Computed
    storeOrder,
    order,
    orderBy,

    // Methods
    refreshOrderStore,
  }
}