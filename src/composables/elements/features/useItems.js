import { toRefs, ref, computed } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const disabled = dependencies.disabled
  const input = dependencies.input

  // ================ DATA ================

  const resolvedItems = ref(null)

  // ============== COMPUTED ==============

  const items = computedOption('items', schema, {})
  
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

  const updateItems = (disable = true) => {
    if (!isNative.value) {
      input.value.resolveOptions()
      return
    }

    if (disable) {
      disabled.value = true
    }

    items.value().then((response) => {
      resolvedItems.value = response
      
      if (disable) {
        disabled.value = false
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
    items,
    nativeItems,
    updateItems,
  }
}

export default base