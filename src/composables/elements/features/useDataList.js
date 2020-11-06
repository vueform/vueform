import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useData from './useData'

export default function useDataList(props, context, dependencies, options)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { submit, data, formatData, formatLoad, prepare } = useData(props, context, dependencies)

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

  const fireChange = dependencies.fireChange

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

  /**
   * Adds a child to the `instances`. Returns the index of the added children.
   *
   * @public
   * @param {any} data data to be set for added child.
   * @returns {number}
   */
  const add = (val = null, triggerChange = true, shouldValidate = true, shouldDirt = true) => {
    const index = instances.value.length

    const schema = Object.assign({}, _.cloneDeep(prototype.value), {
      key: next.value,
    })

    instances.value.push(schema)

    // Add order to data
    if (isObject.value && storeOrder.value) {
      val = Object.assign({}, val || {}, {
        [storeOrder.value]: instances.value.length
      })
    }

    nextTick(() => {
      if (val !== null) {
        children$.value[index].update(val, false, false, false)
      }

      handleUpdated(triggerChange, shouldValidate, shouldDirt)
    })

    return index
  }

  /**
   * Removes a child by it's index.
   *
   * @public
   * @param {index} index index of child to be removed.
   * @returns {void}
   */
  const remove = (index, triggerChange = true, shouldValidate = true, shouldDirt = true) => {
    instances.value.splice(index, 1)
  
    nextTick(() => {
      refreshOrderStore()
      handleUpdated(triggerChange, shouldValidate, shouldDirt)
    })
  }

  const load = (val, triggerChange = false, shouldValidate = false, shouldDirt = false, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined) {
      unload(triggerChange, shouldValidate, shouldDirt)
      return
    }

    clear(false, false, false)

    for (let i = 0; i < _.keys(formatted).length; i++) {
      add(null, false, false, false)
    }
    
    nextTick(() => {
      _.each(children$.value, (element$) => {
        const desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC'

        if (isObject.value && orderBy.value) {
          formatted = desc ? _.sortBy(formatted, orderBy.value).reverse() : _.sortBy(formatted, orderBy.value)
        }
        else if (order.value) {
          formatted = desc ? formatted.sort().reverse() : formatted.sort()
        }

        element$.load(formatted[element$.name], triggerChange, shouldValidate, shouldDirt, format)
      })
      
      handleUpdated(triggerChange, shouldValidate, shouldDirt)
    })
  }

  const unload = (triggerChange = false, shouldValidate = false, shouldDirt = false) => {
    resetValidators()
    clear(triggerChange, shouldValidate, shouldDirt)
  }
  
  /**
   * Updates the element's value.
   *
   * @public
   * @param {any} value the value to be set for the element
   * @returns {void}
   */
  const update = (val, triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    _.each(children$.value, (element$) => {
      if (val[element$.name] === undefined) {
        return
      }
      
      element$.update(val[element$.name])
    })
  }

  /**
   * Clears the value of the element.
   *
   * @public
   * @returns {void}
   */
  const clear = (triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    instances.value = []

    nextTick(() => {
      handleUpdated(triggerChange, shouldValidate, shouldDirt)
    })
  }

  /**
   * Resets the element to it's default state.
   *
   * @public
   * @returns {void}
   */
  const reset = (triggerChange = true) => {
    instances.value = []
    resetValidators()

    nextTick(() => {
      setInitialInstances()

      nextTick(() => {
        if (triggerChange && !_.isEqual(currentValue.value, previousValue.value)) {
          fireChange()
        }
      })
    })
  }

  const handleUpdated = (triggerChange, shouldValidate, shouldDirt) => {
    if ((triggerChange || shouldDirt) && !_.isEqual(currentValue.value, previousValue.value)) {
      if (shouldDirt) {
        dirt()
      }

      if (triggerChange) {
        fireChange()
      }
    }

    if (shouldValidate) {
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
  const handleRemove = () => {
    if (disabled.value) {
      return
    }

    remove()
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
      add(default_.value && default_.value[i] ? default_.value[i] : null, false, false, false)
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
    remove,
    load,
    unload,
    update,
    clear,
    reset,
    prepare,
    handleAdd,
    handleRemove,
    setInitialInstances,
  }
}