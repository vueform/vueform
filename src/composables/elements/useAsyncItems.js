import _ from 'lodash'
import { toRefs, ref, computed, watch, inject } from 'vue'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    items, valueProp, labelProp, dataKey, searchParam,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const disable = dependencies.disable
  const enable = dependencies.enable
  const input = dependencies.input
  const el$ = dependencies.el$
  const form$ = dependencies.form$

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */
  const options = ref(null)

  // ============== COMPUTED ==============
  
  /**
   * Contains the resolved options. 
   * 
   * @type {array}
   */
  const resolvedOptions = computed(() => {
    if (!isNative.value) {
      return options.value
    }

    let nativeItems = []

    _.each(options.value, (item, key) => {
      if ([null, undefined].indexOf(item) !== -1) {
        return
      }
      
      if (Array.isArray(options.value) && typeof item === 'object') {
        if (item[valueProp.value] === undefined) {
          console.warn('You must define `value` property for each option when using an array of objects options for select element')
        }

        nativeItems.push({
          value: item[valueProp.value],
          label: item[labelProp.value]
        })
      } else if (Array.isArray(options.value)) {
        nativeItems.push({
          value: item,
          label: item,
        })
      } else {
        nativeItems.push({
          value: key,
          label: item,
        })
      }
    })

    return nativeItems.map((o) => {
      return { ...o, label: localize(o.label, config$.value, form$.value)}
    })
  })

  // =============== METHODS ==============

  /**
   * Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */
  const updateItems = async (shouldDisable = true) => {
    if (!isNative.value) {
      await input.value?.resolveOptions()
      return
    }

    if (shouldDisable) {
      disable()
    }

    if (typeof items.value === 'string') {
      await resolveOptionsFromUrl()
    } else if (typeof items.value === 'function') {
      await resolveOptionsFromFunction()
    } else {
      options.value = items.value
    }
      
    if (shouldDisable) {
      enable()
    }
  }

  /**
   * Resolves options from url.
   * 
   * @return {void}
   * @private
   */
  const resolveOptionsFromUrl = async () => {
    try {
      let optionList = (await form$.value.$vueform.services.axios.get(items.value))?.data || []

      if (dataKey && dataKey.value && Object.keys(optionList).length) {
        optionList = _.get(optionList, dataKey.value) || []
      }

      options.value = optionList
    } catch (e) {
      options.value = []
      console.warn(`Couldn\'t resolve items from ${items.value}`, e)
    }
  }

  /**
   * Creates an async function returning options from url.
   * 
   * @return {void}
   * @private
   */
  const createAsyncOptionsFromUrl = () => {
    return async (query) => {
      let optionList = (await form$.value.$vueform.services.axios.get(`${items.value}${items.value.match(/\?/)?'&':'?'}${searchParam.value}=${query||''}`))?.data || []

      if (dataKey && dataKey.value && Object.keys(optionList).length) {
        optionList = _.get(optionList, dataKey.value) || []
      }

      return optionList
    }
  }

  /**
   * Resolves options from function.
   * 
   * @return {void}
   * @private
   */
  const resolveOptionsFromFunction = async () => {
    try {
      options.value = await items.value(el$.value) || []
    } catch (e) {
      options.value = []
      console.warn(`Couldn\'t resolve items from async function`, e)
    }
  }

  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */
  const resolveOptions = async (n, o) => {
    if (typeof items.value === 'function' && isNative.value) {
      await resolveOptionsFromFunction()
    } else if (!_.isEqual(n, o) || (n === undefined && o === undefined)) {
      if (typeof items.value === 'string' && isNative.value) {
        await resolveOptionsFromUrl()
      } else if (typeof items.value === 'string' && !isNative.value) {
        options.value = createAsyncOptionsFromUrl()
      } else {
        options.value = items.value
      }
    }
  }

  // ================ HOOKS ===============

  resolveOptions()
  watch(items, resolveOptions)
  watch(isNative, resolveOptions)

  return {
    resolvedOptions,
    updateItems,
  }
}

const checkboxgroup = function(props, context, dependencies) {
  const {
    items,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const disableAll = dependencies.disableAll
  const enableAll = dependencies.enableAll
  const el$ = dependencies.el$
  const form$ = dependencies.form$

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */
  const options = ref(null)

  // ============== COMPUTED ==============
  
  /**
   * Contains the available items. If [`items`](#option-items) are async this contains the resolved items.
   * 
   * @type {array}
   */
  const resolvedOptions = computed(() => {
    let resolvedOptions = []
    
    _.each(options.value, (item, key) => {
      if ([null, undefined].indexOf(item) !== -1) {
        return
      }

      // [{a:1},{b:2}]
      if (Array.isArray(options.value) && typeof item === 'object') {
        if (item.value === undefined) {
          console.warn('You must define `value` property for each item when using an array of objects options')
        }

        resolvedOptions.push(item)
      }

      // ['a', 'b']
      else if (Array.isArray(options.value)) {
        resolvedOptions.push({ value: item, label: item })
      }

      // {a:{label:1},b:{label:2}}
      else if (typeof item === 'object') {
        resolvedOptions.push({ ...item, value: key })
      }

      // {a:1,b:2}
      else {
        resolvedOptions.push({ label: item, value: key })
      }
    })

    return resolvedOptions.map((o) => {
      return { ...o, label: localize(o.label, config$.value, form$.value)}
    })
  })

  // =============== METHODS ==============

  /**
   * Fetches & updates items when using `async` items.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */
  const updateItems = async (shouldDisable = true) => {
    if (shouldDisable) {
      disableAll()
    }

    if (typeof items.value === 'string') {
      await resolveOptionsFromUrl()
    } else {
      await resolveOptionsFromFunction()
    }

    if (shouldDisable) {
      enableAll()
    }
  }

  /**
   * Resolves options from url.
   * 
   * @return {void}
   * @private
   */
  const resolveOptionsFromUrl = async () => {
    try {
      options.value = (await form$.value.$vueform.services.axios.get(items.value))?.data || []
    } catch (e) {
      options.value = []
      console.warn(`Couldn\'t resolve items from ${items.value}`, e)
    }
  }

  /**
   * Resolves options from function. Receives [`el$`](#property-el) as first param.
   * 
   * @return {void}
   * @private
   */
  const resolveOptionsFromFunction = async () => {
    try {
      options.value = await items.value(el$.value) || []
    } catch (e) {
      options.value = []
      console.warn(`Couldn\'t resolve items from async function`, e)
    }
  }

  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */
  const resolveOptions = async () => {
    if (typeof items.value === 'function') {
      await resolveOptionsFromFunction()
    } else if (typeof items.value === 'string') {
      await resolveOptionsFromUrl()
    } else {
      options.value = items.value
    }
  }

  // ================ HOOKS ===============

  resolveOptions()
  watch(items, resolveOptions)

  return {
    resolvedOptions,
    updateItems,
  }
}

const radiogroup = checkboxgroup

export {
  checkboxgroup,
  radiogroup,
}

export default base