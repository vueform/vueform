import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useHandleSort(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const disabled = dependencies.disabled
  const fireSort = dependencies.fireSort
  const value = dependencies.value

  // ============== COMPUTED ==============

  /**
   * Triggered when the user changes the order of the list items.
   *
   * @public
   * @param {object} indexes an object containing `newIndex` and `oldIndex`.
   * @event sort
   */
  const handleSort = (indexes) => {
    let oldIndex = indexes.oldIndex
    let newIndex = indexes.newIndex

    let oldValue = value.value

    if (disabled.value) {
      return
    }
    
    instances.value.splice(newIndex, 0, instances.value.splice(oldIndex, 1)[0])
    children$.value.splice(newIndex, 0, children$.value.splice(oldIndex, 1)[0])

    // refreshes children's order store value
    refreshOrderStore()

    fireSort(newIndex, oldIndex)

    // handleChange(value.value, oldValue, 'sort')
  }

  return {
    handleSort,
  }
}