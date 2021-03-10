import dragula from 'dragula'
import { computed, toRefs, nextTick, ref, watch, onMounted } from 'composition-api'

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

  // ================ DATA ================

  const list = ref(null)

  /**
   * 
   * 
   * @private
   */
  const sortable = ref(null)

  // ============== COMPUTED ==============

  const isSortable = computed(() => {
    return sort.value && !isDisabled.value
  })

  // =============== METHODS ==============

  const initSortable = () => {
    let oldIndex
    let newIndex

    sortable.value = dragula([list.value])

    sortable.value.on('drag', (el) => {
      oldIndex = [].slice.call(el.parentNode.children).findIndex((item) => el === item)
    })

    sortable.value.on('dragend', (el) => {
      newIndex = [].slice.call(el.parentNode.children).findIndex((item) => el === item)

      if (oldIndex === newIndex) {
        return
      }

      // Revert ordering
      list.value.children[newIndex].remove()
      list.value.insertBefore(el, list.value.children[oldIndex])

      handleSort(oldIndex, newIndex)
    })
  }

  const destroySortable = () => {
    sortable.value.destroy()
    sortable.value = null
  }

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

    refreshOrderStore(value.value)

    fire('sort', value.value)
  }
  
  // ============== WATCHERS ==============

  watch(isSortable, (n, o) => {
    if (n === true && o === false) {
      initSortable()
    } else if (n === false && o === true) {
      destroySortable()
    }
  }, { immediate: false })
  
  // ================ HOOKS ===============

  onMounted(() => {
    if (isSortable.value) {
      initSortable()
    }
  })

  return {
    list,
    sortable,
    isSortable,
    handleSort,
    initSortable,
    destroySortable,
  }
}

export default base