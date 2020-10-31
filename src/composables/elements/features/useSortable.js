import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useSortable(props, context, dependencies, options)
{
  // ============ DEPENDENCIES ============

  const disabled = dependencies.disabled
  const handleSort = dependencies.handleSort
  const sort = dependencies.sort

  /**
  * Helper property for v-sortable directive.
  * 
  * @type {object}
  * @default {...}
  * @ignore
  */
  const sortable = computed(() => {
    return {
      sort: disabled.value ? false : sort.value,
      onUpdate: handleSort,
      filter: '.not-sortable'
    }
  })

  return {
    sortable,
  }
}