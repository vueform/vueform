import _ from 'lodash'
import { toRefs, ref, computed, watch, inject, nextTick, onBeforeUnmount } from 'vue'
import localize from './../../utils/localize'
import replaceWildcards from './../../utils/replaceWildcards'

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
  const value = dependencies.value
  const nullValue = dependencies.nullValue
  const path = dependencies.path
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

  /**
   * @private
   */
  const watchers = ref([])

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
      // Refresh async function in case it
      // contains variables that have changed
      if (typeof items.value === 'string') {
        options.value = createAsyncOptionsFromUrl()
      }

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
      let url = await resolveUrlAndSetWatchers(items.value)

      let optionList = (await form$.value.$vueform.services.axios.get(url))?.data || []

      if (dataKey && dataKey.value && Object.keys(optionList).length) {
        optionList = _.get(optionList, dataKey.value) || []
      }

      options.value = optionList

      // If currently selected value is not among the
      // newly fetched option list set the value to null
      cleanupValue(resolvedOptions.value?.map(o=>o.value) || [])
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
      let url = await resolveUrlAndSetWatchers(items.value)

      let optionList = (await form$.value.$vueform.services.axios.get(`${url}${url.match(/\?/)?'&':'?'}${searchParam.value}=${query||''}`))?.data || []

      if (dataKey && dataKey.value && Object.keys(optionList).length) {
        optionList = _.get(optionList, dataKey.value) || []
      }

      // If currently selected value is not among the
      // newly fetched option list set the value to null
      // (using set timeout to wait for async call)
      setTimeout(() => {
        cleanupValue(input.value?.eo?.map(o=>o[valueProp.value]) || [])
      }, 0)

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

  const cleanupValue = (values) => {
    if (!Array.isArray(nullValue.value) && value.value && values.indexOf(value.value) === -1) {
      value.value = _.cloneDeep(nullValue.value)
    }
    else if (Array.isArray(nullValue.value) && value.value.length) {
      value.value = value.value.filter((v) => {
        return values.indexOf(v) !== -1
      })
    }
  }

  const resolveUrlAndSetWatchers = async (url) => {
    const regex = /{([^}]+)}/g

    if (url.match(regex)) {
      await nextTick()

      watchers.value.forEach(unwatch => unwatch())

      let match
      while ((match = regex.exec(url)) !== null) {
        let defaultValue = match[1].match(/\|'([^']+)/)?.[1] || ''
        let elPath = replaceWildcards(match[1].match(/^([^|]+)/)[1], path.value)
        let el$ = form$.value.el$(elPath)

        let elValue = Array.isArray(el$?.value) && el$.value.length
          ? el$.value.join(',') : (
            !Array.isArray(el$?.value) && el$?.value ? el$.value : defaultValue
          )

        url = url.replace(match[0], elValue)

        watchers.value.push(watch(computed(() => el$?.value), () => {
          updateItems()
        }))
      }
    }

    return url
  }

  // ================ HOOKS ===============

  resolveOptions()
  watch(items, resolveOptions)
  watch(isNative, resolveOptions)

  onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch())
  })

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