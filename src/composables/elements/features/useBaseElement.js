import { computed, ref, toRefs } from 'composition-api'

export default function useBaseElement(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const label = dependencies.label || ref(null)
  const placeholder = dependencies.placeholder || ref(null)


  // ============== COMPUTED ==============

  /**
   * Helper property used to determine a generic name for the element.
   * 
   * @type {object}
   * @ignore
   */
  const genericName = computed(() => {
    if (label && label.value) {
      return label.value
    } else if (placeholder && placeholder.value) {
      return placeholder.value
    } else {
      return _.upperFirst(name.value)
    }
  })

  /**
   * Determines if the element's value is a file.
   *
   * @returns {boolean}
   */
  const isFileType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an image.
   *
   * @private
   * @returns {boolean}
   */
  const isImageType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an array.
   *
   * @private
   * @returns {boolean}
   */
  const isArrayType = computed(() => {
    return false
  })

  return {
    // Computed
    genericName,
    isFileType,
    isArrayType,
    isImageType,
  }
}