import _ from 'lodash'
import { toRefs, ref, computed } from 'composition-api'

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
      if (typeof item == 'object') {
        if (item.value === undefined) {
          throw new Error('You must define `value` property when using an array of objects options for select element')
        }

        if (item.label === undefined) {
          throw new Error('You must define `label` property when using an array of objects options for select element')
        }

        nativeItems.push({
          value: item.value,
          label: item.label
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
   * Fetches & updates select options when using `async` options.
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

    items.value().then((response) => {
      resolvedItems.value = response
      
      if (shouldDisable) {
        enable()
      }
    })
  }

  // ================ HOOKS ===============

  if (isNative.value) {
    if (typeof items.value !== 'function') {
      resolvedItems.value = items.value
    } else {
      updateItems()
    }
  }

  return {
    nativeItems,
    updateItems,
  }
}

export default base