import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    controls,
    sort,
    min,
    max,
    addText,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const value = dependencies.value
  const form$ = dependencies.form$
  
  // ================ DATA ================
  
  /**
   * Whether adding new items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or have reached [`max`](#option-max) items. Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   *
   * @type {boolean}
   */
  const hasAdd = computed(() => {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined) && (max.value === -1 || max.value > value.value.length)
  })
  
  /**
   * Whether remove items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or has <= [`min`](#option-min) items. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   *
   * @type {boolean}
   */
  const hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && (min.value === -1 || min.value < value.value.length)
  })
  
  /**
   * Whether list items should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled).
   *
   * @type {boolean}
   */
  const hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value
  })
  
  /**
   * The label of add button.
   *
   * @type {string}
   */
  const addLabel = computed(() => {
    return addText.value || form$.value.translations.vueform.elements.list.add
  })
  
  return {
    hasAdd,
    hasRemove,
    hasSort,
    addLabel,
  }
}

const multifile = function(props, context, dependencies) {
  const {
    controls,
    sort,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  const hasUploading = dependencies.hasUploading
  
  // ================ DATA ================
  
  /**
   * Whether adding new files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled). Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   *
   * @type {boolean}
   */
  const hasAdd = computed(() => {
    return (controls.value.add || controls.value.add === undefined)
  })
  
  /**
   * Whether remove files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   *
   * @type {boolean}
   */
  const hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && !hasUploading.value
  })
  
  /**
   * Whether list files should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress.
   *
   * @type {boolean}
   */
  const hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value && !hasUploading.value
  })
  
  return {
    hasAdd,
    hasRemove,
    hasSort,
  }
}

export {
  multifile,
}

export default base