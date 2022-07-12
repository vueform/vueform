import _ from 'lodash'
import { toRefs, ref, computed } from 'vue'

const base = function(props, context, dependencies, options)
{
  const {
    storeOrder,
    orderBy,
    order,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================= DATA ===============

  const orderFrom = ref(form$.value.$vueform.config.orderFrom)

  // =============== METHODS ==============

  /**
   * Sets the value of `storeOrder` field within a list of items to match the order.
   *
   * @param {array} value* list of items
   * @returns {void}
   * @private
   */
  const refreshOrderStore = (value) => {
    if (storeOrder.value) {
        
      _.each(value, (val, index) => {
        val[storeOrder.value] = order.value && order.value.toUpperCase() === 'DESC'
          ? value.length - index - (orderFrom.value == 0 ? 1 : 0)
          : parseInt(index) + orderFrom.value
      })
    }

    return value

  }

  /**
   * The name of the child (when using [`object`](#option-object)) by which the items should ordered.
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

const multifile = function(props, context, dependencies, options)
{
  const {
    storeOrder,
    orderBy,
  } = toRefs(props)

  const {
    refreshOrderStore,
  } = base(props, context, dependencies, options)

  // =============== METHODS ==============

  /**
   * The name of the field (when using [`fields`](#option-fiels)) by which the files should ordered.
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

export {
  multifile,
}

export default base