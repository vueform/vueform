import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useData from './useData'

export default function useDataList(props, context, dependencies, options)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { submit, data, formatData, formatLoad, changed, prepare } = useData(props, context, dependencies)

  const form$ = dependencies.form$
  const instances = dependencies.instances
  const children$ = dependencies.children$
  const default_ = dependencies.default
  const available = dependencies.available
  const disabled = dependencies.disabled
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue

  const resetValidators = dependencies.resetValidators
  const validateValidators = dependencies.validateValidators
  const dirt = dependencies.dirt

  const order = dependencies.order
  const orderBy = dependencies.orderBy
  const storeOrder = dependencies.storeOrder
  const refreshOrderStore = dependencies.refreshOrderStore

  const isObject = dependencies.isObject
  const prototype = dependencies.prototype

  const fire = dependencies.fire

  // ============== OPTIONS ===============

  const defaultInitial = options.initial

  // ============== COMPUTED ===============
  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let filtered = []

    _.each(children$.value, (element$) => {
      let val = element$.filtered[element$.name]

      if (val !== undefined) {
        filtered.push(val)
      }
    })

    return formatData.value(name.value, filtered, form$.value)
  })

  /**
  * Initial number of child instances.
  * 
  * @type {number}
  * @default 1
  */
  const initial = computed({
    get() {
      if (default_.value && default_.value.length > (schema.value.initial || defaultInitial)) {
        return default_.value.length
      }

      return schema.value.initial !== undefined ? schema.value.initial : defaultInitial
    },
    set(val) {
      form$.value.$set(schema.value, 'initial', val)
    }
  })

  /**
   * Helper method used to retrieve the next key for a new instance.
   *
   * @type {number}
   */
  const next = computed(() => {
    return instances.value.length
      ? _.max(_.map(_.keys(_.keyBy(instances.value, 'key')), Number)) + 1
      : 0
  })

  // =============== METHODS ===============

  // Inserts a new element with triggering change, dirting element and validating if validateOn contains 'change'
  const add = (val = null) => {
    const index = insert(val)

    nextTick(() => {
      fire('add', children$.value[index], index)
      updated()
    })

    return index
  }

  // Inserts a new element without triggering change, validating or dirt
  const insert = (val = null) => {
    const index = instances.value.length

    const schema = computed(() => {
      return Object.assign({}, prototype.value, {
        key: next.value,
      })
    })

    instances.value.push(schema.value)

    // Add order to data
    if (isObject.value && storeOrder.value) {
      val = Object.assign({}, val || {}, {
        [storeOrder.value]: instances.value.length
      })
    }

    if (val !== null) {
      nextTick(() => {
        children$.value[index].load(val)
      })
    }

    return index
  }
  
  const remove = (index) => {
    fire('remove', children$.value[index], index)

    instances.value.splice(index, 1)
  
    nextTick(() => {
      refreshOrderStore()

      updated()
    })
  }

  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    instances.value = []

    if (!available.value || formatted === undefined) {
      return
    }

    for (let i = 0; i < _.keys(formatted).length; i++) {
      insert()
    }

    if (!formatted.length) {
      return
    }

    nextTick(() => {
      _.each(orderValue(formatted), (childValue, i) => {
        children$.value[i].load(childValue)
      })
    })

  }
  
  const update = (val) => {
    instances.value = []

    for (let i = 0; i < _.keys(val).length; i++) {
      insert(val[i])
    }

    nextTick(() => {
      updated()
    })
  }

  const clear = () => {
    instances.value = []

    nextTick(() => {
      updated()
    })
  }

  const reset = () => {
    instances.value = []
    resetValidators()

    nextTick(() => {
      setInitialInstances()

      nextTick(() => {
        if (changed.value) {
          fire('change', currentValue.value, previousValue.value)
        }
      })
    })
  }

  const orderValue = function(val) {
    if (!order.value && !orderBy.value) {
      return val
    }

    _.each(children$.value, (element$) => {
      const desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC'

      if (isObject.value && orderBy.value) {
        val = desc ? _.sortBy(val, orderBy.value).reverse() : _.sortBy(val, orderBy.value)
      }
      else if (order.value) {
        val = desc ? val.sort().reverse() : val.sort()
      }
    })

    return val
  }

  const updated = () => {
    // Required because currentValue & previousValue are only updated
    // on nextTick when then value changes (because of watch)
    nextTick(() => {
      if (changed.value) {
        dirt()
        fire('change', currentValue.value, previousValue.value)
      }
    })

    if (form$.value.shouldValidateOnChange) {
      validateValidators()
    }
  }

  const handleAdd = () => {
    if (disabled.value) {
      return
    }

    add()
  }

  /**
   * Triggered when the user removes a list item or `.remove()` method is invoked.
   *
   * @public
   * @param {number} index index of child to be removed.
   * @event remove
   */
  const handleRemove = (index) => {
    if (disabled.value) {
      return
    }

    remove(index)
  }

  /**
   * Sets initial instances when the element is initalized.
   * 
   * @private 
   * @returns {void}
   */
  const setInitialInstances = () => {
    let count = default_.value.length > initial.value ? default_.value.length : initial.value

    for (let i = 0; i < count; i++) {
      insert(default_.value && default_.value[i] ? default_.value[i] : null, false, false, false)
    }
  }

  // ================ HOOKS ===============

  if (prototype.value !== undefined) {
    setInitialInstances()
  }

  return {
    // Data
    initial,
    next,

    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,

    // Mehtods
    add,
    insert,
    remove,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
    handleAdd,
    handleRemove,
    setInitialInstances,
  }
}