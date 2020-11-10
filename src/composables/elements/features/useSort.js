import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useSort(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const child$ = dependencies.child$
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
  const sort = computed(computedOption('sort', schema, false))

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
   * @public
   * @param {object} indexes an object containing `newIndex` and `oldIndex`.
   * @event sort
   */
  const handleSort = (indexes) => {
    let oldIndex = indexes.oldIndex
    let newIndex = indexes.newIndex

    if (disabled.value) {
      return
    }

    let instancesClone = [
      instances.value[1],
      instances.value[0],
      instances.value[2],
    ]
    
    // instancesClone.splice(newIndex, 0, instancesClone.splice(oldIndex, 1)[0])

    instances.value = instancesClone
    // child$.value.splice(newIndex, 0, child$.value.splice(oldIndex, 1)[0])

    // nextTick(() => {
    //   refreshOrderStore()
      
    //   nextTick(() => {
    //     fire('sort', currentValue.value)
    //     updated()
    //   })
    // })
  }

  return {
    // Computed
    sort,
    sortable,

    // Methods
    handleSort,
  }
}