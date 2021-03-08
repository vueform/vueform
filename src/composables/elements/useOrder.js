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
   * Helper method used to refresh the element's value which stores the order.
   *
   * @private
   * @returns {void}
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

  const orderByName = computed(() => {
    return orderBy.value || storeOrder.value
  })

  return {
    refreshOrderStore,
    orderByName,
  }
}

export default base