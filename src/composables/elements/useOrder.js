import { toRefs, computed } from 'composition-api'

const base = function(props, context, dependencies, options)
{
  const {
    storeOrder,
    orderBy,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isObject = dependencies.isObject
  const children$ = dependencies.children$

  // =============== METHODS ==============

  /**
   * Helper method used to refresh the element's value which stores the order.
   *
   * @private
   * @returns {void}
   */
  const refreshOrderStore = () => {
    if (isObject.value && storeOrder.value) {
      _.each(children$.value, (element$, index) => {
        element$.update({
          [storeOrder.value]: parseInt(index) + 1
        })
      })
    }
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