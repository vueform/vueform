import _ from 'lodash'
import { toRefs, computed } from 'composition-api'

const base = function(props, context, dependencies, options)
{
  const {
    storeOrder,
    orderBy,
    order,
  } = toRefs(props)

  // =============== METHODS ==============

  /**
   * Sets the value of `storeOrder` fields within a list of items to match the order.
   *
   * @param {array} value* list of items
   * @returns {void}
   * @private
   */
  const refreshOrderStore = (value) => {
    if (storeOrder.value) {
        
      _.each(value, (val, index) => {
        val[storeOrder.value] = order.value && order.value.toUpperCase() === 'DESC'
          ? value.length - index
          : parseInt(index) + 1
      })
    }

    return value

  }

  /**
   * The name of the field which we should order by.
   * 
   * @type {string}
   */
  const orderByName = computed(() => {
    return orderBy.value || storeOrder.value
  })

  return {
    refreshOrderStore,
    orderByName,
  }
}

export default base