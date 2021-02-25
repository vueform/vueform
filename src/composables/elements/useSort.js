import { computed, toRefs, nextTick } from 'composition-api'

const base = function(props, context, dependencies, options)
{
  const {
    sort,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const children$Array = dependencies.children$Array
  const isDisabled = dependencies.isDisabled
  const fire = dependencies.fire
  const updated = dependencies.updated
  const refreshOrderStore = dependencies.refreshOrderStore
  const instances = dependencies.instances
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
  const handleSort = (indexes) => {
    // let oldIndex = indexes.oldIndex
    // let newIndex = indexes.newIndex

    // if (isDisabled.value) {
    //   return
    // }

    // instances.value.splice(newIndex, 0, instances.value.splice(oldIndex, 1)[0])
    // children$Array.value.splice(newIndex, 0, children$Array.value.splice(oldIndex, 1)[0])

    // nextTick(() => {
    //   refreshOrderStore()
      
    //   nextTick(() => {
    //     fire('sort', value.value)
    //     updated()
    //   })
    // })
  }

  return {
    sortable,
    handleSort,
  }
}

export default base