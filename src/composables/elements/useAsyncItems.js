import { toRefs, ref, computed } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    items
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const isDisabled = dependencies.isDisabled
  const input = dependencies.input

  // ================ DATA ================

  /**
   * 
   * 
   * @type {array|object}
   * @default {}
   * @private
   */
  const resolvedItems = ref(null)

  // ============== COMPUTED ==============
  
  /**
   * 
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
   * 
   * 
   * @param {boolean} disable* 
   * @returns {void} 
   */
  const updateItems = (disable = true) => {
    if (!isNative.value) {
      input.value.resolveOptions()
      return
    }

    if (disable) {
      isDisabled.value = true
    }

    items.value().then((response) => {
      resolvedItems.value = response
      
      if (disable) {
        isDisabled.value = false
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