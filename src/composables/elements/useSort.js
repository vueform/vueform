import cloneDeep from 'lodash/cloneDeep'
import Sortable from 'sortablejs'
import { computed, toRefs, ref, watch, onMounted } from 'vue'

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
  const sorting = dependencies.sorting
  const length = dependencies.length
  const path = dependencies.path
  const children$Array = dependencies.children$Array
  
  // ================ DATA ================
  
  /**
   * The DOM element containing list items.
   *
   * @type {HTMLElement}
   * @private
   */
  const list = ref(null)
  
  /**
   * The `Sortable.js` instance.
   *
   * @type {object}
   * @private
   */
  const sortable = ref(null)
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.
   *
   * @type {boolean}
   */
  const isSortable = computed(() => {
    return sort.value && !isDisabled.value && length.value && value.value[0] !== undefined
  })
  
  // =============== METHODS ==============
  
  /**
   * Inits Sortable.js.
   *
   * @returns {void}
   * @private
   */
  const initSortable = () => {
    sortable.value = new Sortable(list.value, {
      handle: `[data-handle]`,
      onStart: /* istanbul ignore next: can not imitate dragging */ () => {
        sorting.value = true
      },
      onEnd: handleSort,
    })
  }
  
  /**
   * Destroys Sortable.js.
   *
   * @returns {void}
   * @private
   */
  const destroySortable = () => {
    sortable.value?.destroy()
    sortable.value = null
  }
  
  /**
   * Handles `sort` event.
   *
   * @param {Event} e* Sortable.js event
   * @returns {void}
   * @private
   */
  const handleSort = ({ oldIndex, newIndex, item }) => {
    sorting.value = false
    
    /* istanbul ignore next: can not imitate dragging */
    if (oldIndex === newIndex || isDisabled.value) {
      return
    }
    
    list.value.children[newIndex].remove()
    list.value.insertBefore(item, list.value.children[oldIndex])
    
    let valueClone = cloneDeep(value.value)
    
    valueClone.splice(newIndex, 0, valueClone.splice(oldIndex, 1)[0])
    
    value.value = valueClone
    
    refreshOrderStore(value.value)
    
    fire('sort', value.value, oldIndex, newIndex, children$Array.value[newIndex])
  }
  
  // ============== WATCHERS ==============

  watch(isSortable, (n, o) => {
    /* istanbul ignore else */
    if (n === true && o === false) {
      initSortable()
    } else if (n === false && o === true) {
      destroySortable()
    }
  }, { immediate: false, flush: 'post' })
  
  // ================ HOOKS ===============
  
  onMounted(() => {
    if (isSortable.value) {
      initSortable()
    }
  })
  
  watch(length, (n) => {
    if (!isSortable.value) {
      return
    }
    
    destroySortable()
    initSortable()
    
    sortable.value?.sort(Array.from(Array(n).keys()).reduce((a, b, i) => {
      a.push(`${ path.value }-${ i }`)
      return a
    }, []))
  }, { flush: 'post' })
  
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