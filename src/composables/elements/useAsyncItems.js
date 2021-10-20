import _ from 'lodash'
import { toRefs, ref, computed, watch } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    items
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const disable = dependencies.disable
  const enable = dependencies.enable
  const input = dependencies.input
  const el$ = dependencies.el$

  // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */
  const resolvedItems = ref(null)

  // ============== COMPUTED ==============
  
  /**
   * Contains select options for native select. 
   * 
   * @type {array}
   */
  const nativeItems = computed(() => {
    let nativeItems = []
    
    _.each(resolvedItems.value, (item, key) => {
      if (Array.isArray(resolvedItems.value) && typeof item === 'object') {
        if (item.value === undefined) {
          throw new Error('You must define `value` property for each option when using an array of objects options for select element')
        }

        if (item.label === undefined) {
          throw new Error('You must define `label` property for each option when using an array of objects options for select element')
        }

        nativeItems.push({
          value: item.value,
          label: item.label
        })
      } else if (Array.isArray(resolvedItems.value)) {
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

    return nativeItems
  })

  // =============== METHODS ==============

  /**
   * Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.
   * 
   * @param {boolean} shouldDisable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */
  const updateItems = (shouldDisable = true) => {
    if (!isNative.value) {
      input.value.resolveOptions()
      return
    }

    if (shouldDisable) {
      disable()
    }

    items.value(el$.value).then((response) => {
      resolvedItems.value = response
      
      if (shouldDisable) {
        enable()
      }
    })
  }

  const resolveItems = () => {
    if (typeof items.value !== 'function') {
      resolvedItems.value = items.value
    } else {
      updateItems()
    }
  }

  // ================ HOOKS ===============

  if (isNative.value) {
    resolveItems()

    watch(items, resolveItems)
  }


  return {
    nativeItems,
    updateItems,
  }
}

const tags = function(props, context, dependencies) {
  const {
    updateItems
  } = base(props, context, dependencies)

  return {
    updateItems,
  }
}

export {
  tags,
}

export default base