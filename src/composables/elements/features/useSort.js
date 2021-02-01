import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const children$Array = dependencies.children$Array
  const disabled = dependencies.disabled
  const fire = dependencies.fire
  const updated = dependencies.updated
  const refreshOrderStore = dependencies.refreshOrderStore
  const instances = dependencies.instances
  const currentValue = dependencies.currentValue

  // ============== COMPUTED ==============

  /**
  * Whether the list items can be sorted by drag n drop.
  * 
  * @type {boolean}
  * @default false
  */
  const sort = computedOption('sort', schema, false)

  /**
   * 
   * 
   * @private
   */
  const sortable = computed(() => {
    return {
      sort: disabled.value ? false : sort.value,
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
    let oldIndex = indexes.oldIndex
    let newIndex = indexes.newIndex

    if (disabled.value) {
      return
    }

    instances.value.splice(newIndex, 0, instances.value.splice(oldIndex, 1)[0])
    children$Array.value.splice(newIndex, 0, children$Array.value.splice(oldIndex, 1)[0])

    nextTick(() => {
      refreshOrderStore()
      
      nextTick(() => {
        fire('sort', currentValue.value)
        updated()
      })
    })
  }

  return {
    sort,
    sortable,
    handleSort,
  }
}

export default base