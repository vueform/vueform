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
   * Whether adding new items is allowed. Will return `false` if the element is `:disabled` or have reached `:max` items. Can be disabled manually by setting [`:controls.add`](#controls) to `false`.
   * 
   * @type {boolean}
   */
  const hasAdd = computed(() => {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined) && (max.value === -1 || max.value > value.value.length)
  })

  /**
   * Whether remove items is allowed. Will return `false` if the element is `:disabled` or has <= `:min` items. Can be disabled manually by setting [`:controls.remove`](#controls) to `false`.
   * 
   * @type {boolean}
   */
  const hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && (min.value === -1 || min.value < value.value.length)
  })

  /**
   * Whether list items should be sortable. Can be enabled by setting [`:sort`](#sort) to `true`, but will return `false` if the element is `:disabled`.
   * 
   * @type {boolean}
   */
  const hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value
  })

  return {
    hasAdd,
    hasRemove,
    hasSort,
  }
}

export default base