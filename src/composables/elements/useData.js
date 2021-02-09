import { computed, nextTick, toRefs, watch } from 'composition-api'
import computedOption from './../../utils/computedOption'
import checkDateFormat from './../../utils/checkDateFormat'

const base = function(props, context, dependencies, options = {})
{
  const {
    submit,
    formatData,
    formatLoad,
    name
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const dirt = dependencies.dirt
  const resetValidators = dependencies.resetValidators
  const validate = dependencies.validate
  const fire = dependencies.fire
  const defaultValue = dependencies.defaultValue
  const nullValue = dependencies.nullValue

  // =============== PRIVATE ===============

  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val)
    }

    value.value = val
  }

  // ============== COMPUTED ===============

  /**
   * An object containing the element `name` as a key and its `value` as value.
   * 
   * @type {object}
   */
  const data = computed(() => {
    return formatData.value ? formatData.value(name.value, value.value, form$.value) : {[name.value]: value.value}
  })
  
  /**
   * An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.
   * 
   * @type {object}
   */
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }

    return data.value
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const changed = computed(() => {
    return !_.isEqual(currentValue.value, previousValue.value)
  })

  // =============== METHODS ===============

  /**
   * 
   * 
   * @param {string|number} value* The value to be loaded.
   * @param {boolean} format Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`.
   * @returns {void}
   */
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    setValue(available.value && formatted !== undefined ? formatted : _.clone(nullValue.value))
  }

  /**
   * 
   * 
   * @param {string|number} value* The value to update the field with.
   * @returns {void}
   */
  const update = (val) => {
    setValue(val)

    updated()
  }

  /**
   * 
   * 
   * @returns {void}
   */
  const clear = () => {
    setValue(_.clone(nullValue.value))

    updated()
  }

  /**
   * 
   * 
   * @returns {void}
   */
  const reset = () => {
    setValue(_.clone(defaultValue.value))

    resetValidators()

    if (changed.value) {
      fire('change', currentValue.value, previousValue.value)
    }
  }

  /**
   * 
   * 
   * @returns {void}
   * @private
   */
  const updated = () => {
    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
  }

  /**
   * 
   *
   * @returns {void}
   * @private
   */
  const prepare = async () => {}

  return {
    data,
    filtered,
    changed,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}

const date = function(props, context, dependencies)
{
  const {
    submit,
    formatData,
    formatLoad,
  } = toRefs(props)

  const {
    data,
    filtered,
    changed,
    update,
    clear,
    reset,
    updated,
    prepare
  } = base(props, context, dependencies, {
    setValue: (val) => {
      if (_.isEmpty(val) && !(val instanceof Date)) {
        value.value =  _.clone(nullValue.value)
        return
      }

      checkDateFormat(valueFormat.value, val)

      value.value = val instanceof Date ? val : moment(val, valueFormat.value).toDate()
    }
  })

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat
  const value = dependencies.value
  const available = dependencies.available
  const loadFormat = dependencies.loadFormat

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined || (_.isEmpty(formatted) && !(formatted instanceof Date))) {
      value.value =  _.clone(nullValue.value)
      return
    }

    checkDateFormat(loadFormat.value, formatted)

    value.value = formatted instanceof Date ? formatted : moment(formatted, loadFormat.value).toDate()
  }

  return {
    data,
    filtered,
    changed,
    formatData,
    formatLoad,
    submit,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}

const dates = function(props, context, dependencies)
{
  const {
    formatLoad
  } = toRefs(props)

  const {
    data,
    filtered,
    changed,
    update: baseUpdate,
    clear,
    reset,
    updated,
    prepare
  } = base(props, context, dependencies, {
    setValue: (val) => {
      if (_.isEmpty(val)) {
        value.value =  _.clone(nullValue.value)
        return
      }

      value.value = _.map(val, (v) => {
        checkDateFormat(valueFormat.value, v)

        return v instanceof Date ? v : moment(v, valueFormat.value).toDate()
      })
    }
  })

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat
  const value = dependencies.value
  const available = dependencies.available
  const loadFormat = dependencies.loadFormat

  // =============== METHODS ===============

  /**
   * 
   * 
   * 
   * @param {array} value* The value to be loaded.
   * @param {boolean} format Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`.
   * @returns {void}
   */
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined || _.isEmpty(formatted)) {
      value.value =  _.clone(nullValue.value)
      return
    }

    value.value = _.map(formatted, (v) => {
      checkDateFormat(loadFormat.value, v)

      return v instanceof Date ? v : moment(v, loadFormat.value).toDate()
    })
  }

  /**
   * 
   * 
   * @param {array} value* The value to update the field with.
   * @returns {void}
   */
  const update = (val) => {
    return baseUpdate(val)
  }

  return {
    data,
    filtered,
    changed,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}

const object = function(props, context, dependencies)
{
  const {
    name,
    formatLoad,
  } = toRefs(props)

  const {
    data,
    prepare
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const children$ = dependencies.children$

  // ============== COMPUTED ===============
  
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let filtered = {}

    _.each(children$.value, (element$) => {
      filtered = Object.assign({}, filtered, element$.filtered)
    })

    return formatData.value ? formatData.value(name.value, filtered, form$.value) : {[name.value]: filtered}
  })

  // =============== METHODS ===============

  /**
   * 
   * 
   * 
   * @param {object} value* The value to be loaded.
   * @param {boolean} format Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`.
   * @returns {void}
   */
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    _.each(children$.value, (element$) => {
      element$.load(element$.flat ? formatted : formatted[element$.name], format)
    })
  }

  /**
   * 
   * 
   * @param {object} value* The value to update the field with.
   * @returns {void}
   */
  const update = (val) => {
    _.each(children$.value, (element$) => {
      if (val[element$.name] === undefined && !element$.flat) {
        return
      }

      element$.update(element$.flat ? val : val[element$.name])
    })
  }

  const clear = () => {
    _.each(children$.value, (element$) => {
      element$.clear()
    })
  }

  const reset = () => {
    _.each(children$.value, (element$) => {
      element$.reset()
    })
  }

  return {
    data,
    filtered,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const group = function(props, context, dependencies)
{
  const {
    name,
    formatData,
    formatLoad
  } = toRefs(props)

  const {
    submit,
    update,
    clear,
    reset,
    prepare
  } = object(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const children$ = dependencies.children$
  const value = dependencies.value
  const available = dependencies.available

  // ============== COMPUTED ===============

  const data = computed(() => {
    return formatData.value ? formatData.value(name.value, value.value, form$.value) : value.value
  })

  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let filtered = {}

    _.each(children$.value, (element$) => {
      filtered = Object.assign({}, filtered, element$.filtered)
    })

    return formatData.value ? formatData.value(name.value, filtered, form$.value) : filtered
  })

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    _.each(children$.value, (element$) => {
      element$.load(element$.flat ? formatted : formatted[element$.name], format)
    })
  }

  return {
    data,
    filtered,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const list = function(props, context, dependencies, options)
{
  const {
    initial,
    name,
    storeOrder,
    formatLoad,
    order,
    orderBy,
  } = toRefs(props)

  const {
    data,
    changed,
    prepare
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const instances = dependencies.instances
  const children$ = dependencies.children$
  const defaultValue = dependencies.defaultValue
  const available = dependencies.available
  const isDisabled = dependencies.isDisabled
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const resetValidators = dependencies.resetValidators
  const validateValidators = dependencies.validateValidators
  const dirt = dependencies.dirt
  const refreshOrderStore = dependencies.refreshOrderStore
  const isObject = dependencies.isObject
  const prototype = dependencies.prototype
  const fire = dependencies.fire

  // ============== OPTIONS ===============

  const defaultInitial = options.initial

  // ============== COMPUTED ===============
  
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

    return formatData.value ? formatData.value(name.value, filtered, form$.value) : {[name.value]: filtered}
  })

  /**
  * Initial number of child instances.
  * 
  * @type {number}
  * @default 1
  * @option
  */
  const initialInstances = computed(() => {
    if (defaultValue.value && defaultValue.value.length > (initial.value || defaultInitial)) {
      return defaultValue.value.length
    }

    return initial.value !== undefined ? initial.value : defaultInitial
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
   * 
   * 
   * 
   * @param {object|array|string|number|boolean} value  
   * @returns {void}
   */
  const add = (val = null) => {
    const index = insert(val)

    nextTick(() => {
      fire('add', children$.value[index], index)
      updated()
    })

    return index
  }

  /**
   * 
   * 
   * 
   * @param {object|array|string|number|boolean} value  
   * @returns {number}
   */
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
  
  /**
   * 
   * 
   * 
   * @param {number} index*   
   * @returns {void}
   */
  const remove = (index) => {
    fire('remove', children$.value[index], index)

    instances.value.splice(index, 1)
  
    nextTick(() => {
      refreshOrderStore()

      updated()
    })
  }

  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

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
        children$.value[i].load(childValue, format)
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

  /**
   * 
   * 
   * 
   * @param {array} value  
   * @returns {array}
   * @private
   */
  const orderValue = (val) => {
    if (!order.value && !orderBy.value) {
      return val
    }

    const desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC'

    if (isObject.value && orderBy.value) {
      val = desc ? _.sortBy(val, orderBy.value).reverse() : _.sortBy(val, orderBy.value)
    }
    else if (order.value) {
      val = desc ? val.sort().reverse() : val.sort()
    }

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

  /**
   * 
   * 
   * 
   * @returns {void}
   * @private
   */
  const handleAdd = () => {
    if (isDisabled.value) {
      return
    }

    add()
  }

  /**
   * Triggered when the user removes a list item or `.remove()` method is invoked.
   *
   * @param {number} index* Index of child to be removed.
   * @returns {void}
   * @private
   */
  const handleRemove = (index) => {
    if (isDisabled.value) {
      return
    }

    remove(index)
  }

  /**
   * Sets initial instances when the element is initalized.
   * 
   * @returns {void}
   * @private 
   */
  const setInitialInstances = () => {
    let count = defaultValue.value.length > initialInstances.value ? defaultValue.value.length : initialInstances.value

    for (let i = 0; i < count; i++) {
      insert(defaultValue.value && defaultValue.value[i] ? defaultValue.value[i] : null, false, false, false)
    }
  }

  // ================ HOOKS ===============

  if (prototype.value !== undefined) {
    setInitialInstances()
  }

  return {
    filtered,
    initialInstances,
    next,
    data,
    add,
    insert,
    remove,
    load,
    update,
    clear,
    reset,
    updated,
    handleAdd,
    handleRemove,
    setInitialInstances,
    prepare,
  }
}

const multilingual = function(props, context, dependencies, options = {})
{
  const {
    formatLoad
  } = toRefs(props)

  const {
    data,
    filtered,
    changed,
    reset,
    prepare
  } = base(props, context, dependencies, options)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const dirt = dependencies.dirt
  const validateLanguage = dependencies.validateLanguage
  const language = dependencies.language
  const fire = dependencies.fire
  const nullValue = dependencies.nullValue

  // =============== PRIVATE ===============

  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val)
    }

    value.value = val
  }

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined) {
      value.value = _.clone(nullValue.value)
      return
    }

    if (!_.isPlainObject(formatted)) {
      throw new Error('Multilingual element requires an object to load')
    }

    setValue(Object.assign({}, _.clone(nullValue.value), formatted))
  }

  const update = (val) => {
    let updateValue = val

    if (!_.isPlainObject(updateValue)) {
      updateValue = {
        [language.value]: val,
      }
    }
    
    setValue(Object.assign({}, value.value, updateValue))

    updated()
  }

  const clear = () => {
    setValue(_.clone(nullValue.value))

    updated()
  }

  const updated = () => {
    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validateLanguage(language.value)
    }
  }

  return {
    data,
    filtered,
    changed,
    load,
    update,
    clear,
    updated,
    reset,
    prepare,
  }
}

const multifile = function(props, context, dependencies, options = {})
{
  const {
    filtered,
    next,
    data,
    add,
    insert,
    remove,
    load,
    update,
    clear,
    reset,
    updated,
    handleAdd,
    handleRemove,
    setInitialInstances,
    prepare,
  } = list(props, context, dependencies, options)

  return {
    filtered,
    next,
    data,
    add,
    insert,
    remove,
    load,
    update,
    clear,
    reset,
    updated,
    handleAdd,
    handleRemove,
    setInitialInstances,
    prepare,
  }
}

const trix = function(props, context, dependencies)
{
  const {
    data,
    filtered,
    changed,
    load,
    update,
    clear,
    reset,
    updated,
    prepare
  } = base(props, context, dependencies, {
    setValue: (val) => {
      value.value = val

      nextTick(() => {
        input.value.update(val)
      })
    }
  })

  // ============ DEPENDENCIES =============

  const input = dependencies.input
  const value = dependencies.value

  return {
    data,
    filtered,
    changed,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}

const ttrix = function(props, context, dependencies)
{
  const {
    data,
    filtered,
    changed,
    load,
    update,
    clear,
    reset,
    updated,
    prepare
  } = multilingual(props, context, dependencies, {
    setValue: (val) => {
      value.value = val

      nextTick(() => {
        input.value.update(val[language.value])
      })
    }
  })

  // ============ DEPENDENCIES =============

  const input = dependencies.input
  const model = dependencies.model
  const value = dependencies.value
  const language = dependencies.language

  // ============== WATCHERS ==============

  watch(language, () => {
    input.value.update(model.value)
  })

  return {
    data,
    filtered,
    changed,
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}

export {
  date,
  dates,
  object,
  group,
  list,
  multilingual,
  multifile,
  trix,
  ttrix,
}

export default base