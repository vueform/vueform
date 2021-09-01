import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    controls,
    sort,
    min,
    max,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const value = dependencies.value

  // ================ DATA ================

  /**
   * 
   * 
   * @type {boolean}
   */
  const hasAdd = computed(() => {
    return !isDisabled.value && controls.value.add && (max.value === -1 || max.value > value.value.length)
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const hasRemove = computed(() => {
    return !isDisabled.value && controls.value.remove && (min.value === -1 || min.value < value.value.length)
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const hasSort = computed(() => {
    return !isDisabled.value && controls.value.sort && sort.value
  })

  return {
    hasAdd,
    hasRemove,
    hasSort,
  }
}

export default base