import each from 'lodash/each'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import map from 'lodash/map'
import isPlainObject from 'lodash/isPlainObject'
import clone from 'lodash/clone'
import moment from 'moment'
import { computed, nextTick, toRefs, watch, ref } from 'vue'
import checkDateFormat from './../../utils/checkDateFormat'
import asyncForEach from './../../utils/asyncForEach'

const base = function(props, context, dependencies, options = {})
{
  const {
    submit,
    formatData,
    formatLoad,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const resetValidators = dependencies.resetValidators
  const defaultValue = dependencies.defaultValue
  const nullValue = dependencies.nullValue
  const resetting = dependencies.resetting
  
  // =============== PRIVATE ===============
  
  /**
   * Sets the value of the element.
   *
   *
   * @param {any} val the value to be set
   * @returns {void}
   * @private
   */
  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val)
    }
    
    value.value = val
  }

  // ============== COMPUTED ===============
  
  /**
   * The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data.
   *
   * @type {object}
   */
  const data = computed(() => {
    return { [name.value]: value.value }
  })
  
  /**
   * Same as `data` property except that it only includes the element's value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   *
   * @type {object}
   */
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    return formatData.value ? formatData.value(name.value, value.value, form$.value) : { [name.value]: value.value }
  })
  
  // =============== METHODS ===============
  
  /**
   * Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.
   *
   * @param {any} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)
   * @returns {void}
   */
  const load = (val, format = false) => {
    setValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val)
  }
  
  /**
   * Updates the value of the element similarly to [`load`](#method-load), only that it can\'t format data.
   *
   * @param {any} value* the value to be set
   * @returns {void}
   */
  const update = (val) => {
    setValue(val)
  }
  
  /**
   * Clears the element's value.
   *
   * @returns {void}
   */
  const clear = () => {
    setValue(cloneDeep(nullValue.value))
  }
  
  /**
   * Resets the element's value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.
   *
   * @returns {void}
   */
  const reset = () => {
    resetting.value = true
    setValue(cloneDeep(defaultValue.value))
    resetValidators()
  }
  
  /**
   * Prepares the element.
   *
   * @returns {Promise}
   * @private
   */
  /* istanbul ignore next:@todo:adam missing implementation, but used in code */
  const prepare = async () => {
  }
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const select = function(props, context, dependencies, options = {})
{
  const {
    resolveOnLoad,
    items,
  } = toRefs(props)

  const {
    data,
    requestData,
    load,
    update,
    clear,
    prepare,
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES =============

  const value = dependencies.value
  const resetValidators = dependencies.resetValidators
  const defaultValue = dependencies.defaultValue
  const updateItems = dependencies.updateItems
  const resetting = dependencies.resetting

  // =============== PRIVATE ===============

  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val)
    }

    value.value = val
  }

  // =============== METHODS ===============

  const reset = () => {
    resetting.value = true
    setValue(cloneDeep(defaultValue.value))
    resetValidators()

    if (typeof items.value === 'string' && resolveOnLoad.value !== false) {
      updateItems()
    }
  }

  return {
    data,
    requestData,
    load,
    update,
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
    formatData,
    submit,
  } = toRefs(props)
  
  const {
    data,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const available = dependencies.available
  const children$ = dependencies.children$
  const children$Array = dependencies.children$Array
  const resetting = dependencies.resetting

  // ============== COMPUTED ===============
  
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let requestData = {}
    
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      requestData = Object.assign({}, requestData, element$.requestData)
    })
    
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : { [name.value]: requestData }
  })
  
  // =============== METHODS ===============
  
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val
    
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      if (!element$.flat && formatted[element$.name] === undefined) {
        element$.clear()
        return
      }
      
      element$.load(element$.flat ? formatted : formatted[element$.name], format)
    })
  }
  
  const update = (val) => {
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      if (val[element$.name] === undefined && !element$.flat) {
        return
      }
      
      element$.update(element$.flat ? val : val[element$.name])
    })
  }
  
  const clear = () => {
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      element$.clear()
    })
  }
  
  const reset = () => {
    resetting.value = true
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      element$.reset()
    })
  }

  const prepare = async () => {
    await asyncForEach(children$Array.value, async (e$) => {
      if (e$.prepare) {
        await e$.prepare()
      }
    })
  }

  return {
    data,
    requestData,
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
    submit,
  } = toRefs(props)
  
  const {
    load,
    update,
    clear,
    reset,
    prepare,
  } = object(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const children$ = dependencies.children$
  const available = dependencies.available
  const value = dependencies.value
  
  // ============== COMPUTED ===============
  
  /**
   * The value of child elements in object. This gets merged with the parent component's data.
   *
   * @type {object}
   */
  const data = computed(() => {
    return value.value
  })
  
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let requestData = {}
    
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      requestData = Object.assign({}, requestData, element$.requestData)
    })
    
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : requestData
  })
  
  return {
    data,
    requestData,
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
    name,
    storeOrder,
    formatLoad,
    formatData,
    order,
    submit,
    initial,
    default: default_,
  } = toRefs(props)
  
  const {
    update,
    clear,
    data,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const children$ = dependencies.children$
  const children$Array = dependencies.children$Array
  const available = dependencies.available
  const isDisabled = dependencies.isDisabled
  const value = dependencies.value
  const orderByName = dependencies.orderByName
  const refreshOrderStore = dependencies.refreshOrderStore
  const dataPath = dependencies.dataPath
  const parent = dependencies.parent
  const nullValue = dependencies.nullValue
  const defaultValue = dependencies.defaultValue
  const fire = dependencies.fire
  const resetValidators = dependencies.resetValidators
  const resetting = dependencies.resetting
  
  // ================ DATA =================
  
  const initialValue = ref(get(form$.value.model, dataPath.value))
  
  // ============== COMPUTED ===============
  
  /**
   * Default value of the parent
   *
   * @type {any}
   * @private
   */
  const parentDefaultValue = computed(() => {
    return parent && parent.value ? parent.value.defaultValue[name.value] : form$.value.options.default[name.value]
  })
  
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let requestData = []
    
    each(children$.value, (element$) => {
      let val = element$.requestData[element$.name]
      
      if (val !== undefined) {
        requestData.push(val)
      }
    })
    
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : { [name.value]: requestData }
  })
  
  /**
   * Number of children.
   *
   * @type {number}
   * @private
   */
  const length = computed(() => {
    return Object.keys(value.value || /* istanbul ignore next: failsafe only */ {}).length
  })
  
  // =============== METHODS ===============
  
  /**
   * Appends a new item.
   *
   * @param {any} value value of the appended element (optional)
   * @returns {number} the index of the appended item
   */
  const add = (val = undefined, focus = false) => {
    let newValue = storeOrder.value ? Object.assign({}, val || {}, {
      [storeOrder.value]: val ? val[storeOrder.value] : undefined
    }) : val
    
    value.value = refreshOrderStore(value.value.concat([newValue]))
    
    // value.value = refreshOrderStore(value.value)
    
    let index = value.value.length - 1
    
    fire('add', index, newValue, value.value)
    
    if (focus) {
      nextTick(() => {
        children$Array.value[children$Array.value.length - 1].focus()
      })
    }
    
    return index
  }
  
  /**
   * Removes an items by its index.
   *
   *
   * @param {number} index* index of items to be removed
   * @returns {void}
   */
  const remove = (index) => {
    value.value = value.value.filter((v, i) => i !== index)
    
    refreshOrderStore(value.value)
    
    fire('remove', index, value.value)
  }
  
  const load = async (val, format = false) => {
    let values = sortValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val)
    
    clear()
    
    await nextTick()
    
    for (let i = 0; i < values.length; i++) {
      add()
    }
    
    await nextTick()
    
    each(children$.value, (child$, i) => {
      child$.load(values[i], format)
    })
  }
  
  const reset = () => {
    resetting.value = true

    value.value = cloneDeep(defaultValue.value)

    resetValidators()
    
    if (!value.value.length && initial.value > 0) {
      for (let i = 0; i < initial.value; i++) {
        add()
      }
    
      // NextTick is no longer required as validation
      // happens with async/await anyway in children
      // nextTick(() => {
      children$Array.value.forEach((child$) => {
        child$.reset()
      })
      // })
    }
    
    nextTick(() => {
      refreshOrderStore(value.value)
    })
  }

  const prepare = async () => {
    await asyncForEach(children$Array.value, async (e$) => {
      if (e$.prepare) {
        await e$.prepare()
      }
    })
  }

  /**
   * Sorts value when `order` and `orderByName` is defined.
   *
   * @param {array} value value to be sorted
   * @returns {array}
   * @private
   */
  const sortValue = (val) => {
    if ((!order.value && !orderByName.value) || (!val)) {
      return val
    }
    
    const desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC'
    
    /* istanbul ignore else: console.log() shows that the single run test falls into the else branch, but coverage does not detect */
    if (orderByName.value) {
      val = desc ? sortBy(val, orderByName.value).reverse() : sortBy(val, orderByName.value)
    } else if (order.value) {
      val = desc ? val.sort().reverse() : val.sort()
    }
    
    return val
  }
  
  /**
   * Handles the `add` event.
   *
   * @returns {void}
   * @private
   */
  const handleAdd = () => {
    if (isDisabled.value) {
      return
    }
    
    add(undefined, true)
  }
  
  /**
   * Handles the `remove` event.
   *
   * @param {number} index* index of child to be removed
   * @returns {void}
   * @private
   */
  const handleRemove = (index) => {
    if (isDisabled.value) {
      return
    }
    
    remove(index)
  }
  
  // ================ HOOKS ===============
  
  if (initialValue.value === undefined && parentDefaultValue.value === undefined && default_.value === undefined) {
    if (initial.value > 0) {
      for (let i = 0; i < initial.value; i++) {
        add()
      }
    } else {
      value.value = nullValue.value
    }
  } else if (initialValue.value === undefined) {
    value.value = defaultValue.value
  }
  
  return {
    requestData,
    data,
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  }
}

const date = function(props, context, dependencies)
{
  const {
    formatLoad,
  } = toRefs(props)
  
  const {
    data,
    requestData,
    update,
    clear,
    reset,
    prepare,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const value = dependencies.value
  const loadDateFormat = dependencies.loadDateFormat
  
  // =============== METHODS ===============
  
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val
    
    checkDateFormat(loadDateFormat.value, formatted)
    
    value.value = formatted instanceof Date || !formatted ? formatted : moment(formatted, loadDateFormat.value).toDate()
  }
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const dates = function(props, context, dependencies)
{
  const {
    formatLoad,
  } = toRefs(props)
  
  const {
    data,
    requestData,
    update,
    clear,
    reset,
    prepare,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const value = dependencies.value
  const loadDateFormat = dependencies.loadDateFormat
  
  // =============== METHODS ===============
  
  const load = (val, format = false) => {
    let formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val
    
    value.value = map(formatted, (v) => {
      checkDateFormat(loadDateFormat.value, v)
      
      return v instanceof Date ? v : moment(v, loadDateFormat.value).toDate()
    })
  }
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const multilingual = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const {
    formatLoad,
  } = toRefs(props)
  
  const {
    data,
    requestData,
    clear,
    reset,
    prepare,
  } = base(props, context, dependencies, options)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const value = dependencies.value
  const language = dependencies.language
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
    
    if (!isPlainObject(formatted)) {
      throw new Error('Multilingual element requires an object to load')
    }
    
    setValue(Object.assign({}, clone(nullValue.value), formatted))
  }
  
  const update = (val) => {
    let updateValue = val
    
    if (!isPlainObject(updateValue)) {
      updateValue = {
        [language.value]: val,
      }
    }
    
    setValue(Object.assign({}, value.value, updateValue))
  }
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const editor = function(props, context, dependencies)
{
  const {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  } = base(props, context, dependencies, {
    setValue: (val) => {
      value.value = val
      
      nextTick(() => {
        input.value.update(val)
      })
    },
  })
  
  // ============ DEPENDENCIES =============
  
  const input = dependencies.input
  const value = dependencies.value
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const teditor = function(props, context, dependencies)
{
  const {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  } = multilingual(props, context, dependencies, {
    setValue: (val) => {
      value.value = val
      
      nextTick(() => {
        input.value.update(val[language.value])
      })
    },
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
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const file = function(props, context, dependencies)
{
  const {
    load,
    update,
    clear,
    reset,
    prepare,
  } = base(props, context, dependencies)
  
  const {
    submit,
    formatData,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  
  // ============== COMPUTED ===============
  
  const data = computed(() => {
    let v = value.value
    
    if (typeof v === 'object' && v?.__file__) {
      v = { ...v }
      delete v.__file__
    }
    
    return { [name.value]: v }
  })
  
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let v = value.value
    
    if (typeof v === 'object' && v?.__file__) {
      v = { ...v }
      delete v.__file__
    }
    
    return formatData.value ? formatData.value(name.value, v, form$.value) : { [name.value]: v }
  })
  
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  }
}

const multifile = function(props, context, dependencies)
{
  const {
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  } = list(props, context, dependencies)
  
  const {
    submit,
    formatData,
    name,
  } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const children$ = dependencies.children$
  
  // ============== COMPUTED ===============
  
  const data = computed(() => {
    let val = value.value
    
    val = val.map((file) => {
      if (typeof file === 'object' && file?.__file__) {
        let v = { ...file }
        delete v.__file__
        return v
      }
      
      return file
    })
    
    return { [name.value]: val }
  })
  
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let requestData = []


    each(children$.value, (element$) => {
      let val = element$.requestData[element$.name]
      
      /* istanbul ignore next: failsafe only */
      if (val !== undefined) {
        if (typeof val === 'object' && val?.__file__) {
          let v = { ...file }
          delete v.__file__
          val = v
        }
        
        requestData.push(val)
      }
    })
    
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : { [name.value]: requestData }
  })
  
  return {
    requestData,
    data,
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  }
}

const multiselect = select
const tags = select

export {
  date,
  dates,
  object,
  group,
  list,
  multilingual,
  editor,
  teditor,
  file,
  multifile,
  select,
  multiselect,
  tags,
}

export default base