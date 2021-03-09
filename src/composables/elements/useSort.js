import { computed, toRefs, nextTick } from 'composition-api'

const base = function(props, context, dependencies, options)
{
  const {
    sort,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const fire = dependencies.fire
  const refreshOrderStore = dependencies.refreshOrderStore
  const value = dependencies.value

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const sortable = computed(() => {
    return {
      sort: isDisabled.value ? false : sort.value,
      onUpdate: handleSort,
    }
  })

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the order of the list items.
   *
   * @param {object} indexes an object containing `newIndex` and `oldIndex`.
   * @event sort
   */
  const handleSort = (oldIndex, newIndex) => {
    if (isDisabled.value) {
      return
    }

    let valueClone = _.cloneDeep(value.value)

    valueClone.splice(newIndex, 0, valueClone.splice(oldIndex, 1)[0])

    value.value = valueClone

    fire('sort', value.value)

    refreshOrderStore(value.value)
  }

  return {
    sortable,
    handleSort,
  }
}

export default base