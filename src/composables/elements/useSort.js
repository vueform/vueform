import _ from 'lodash'
import Sortable from 'sortablejs'
import { computed, toRefs, nextTick, ref, watch, onMounted } from 'composition-api'

const base = function(props, context, dependencies, options)
{
  const {
    sort,
    name,
  } = toRefs(props)

  const defaultClasses = toRefs(context.data).defaultClasses

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const fire = dependencies.fire
  const refreshOrderStore = dependencies.refreshOrderStore
  const value = dependencies.value
  const classes = dependencies.classes
  const sorting = dependencies.sorting

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
    sortable.value = new Sortable(list.value, {
      handle: `[data-handle]`,
      onStart: () => {
        sorting.value = true
      },
      onEnd: handleSort,
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
  const handleSort = ({ oldIndex, newIndex, item }) => {
    sorting.value = false

    if (oldIndex === newIndex || isDisabled.value) {
      return
    }
    
    list.value.children[newIndex].remove()
    list.value.insertBefore(item, list.value.children[oldIndex])

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