import { computed, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  const type = computedOption('type', schema, schema.value.type)

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
    type,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const list = function(props, context, dependencies)
{
  const { type, isFileType, isImageType } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * Determines if the element's value is a file.
   *
   * @returns {boolean}
   */
  const isArrayType = computed(() => {
    return true
  })

  return {
    type,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const file = function(props, context, dependencies)
{
  const { type, isArrayType, isImageType } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * Determines if the element's value is a file.
   *
   * @returns {boolean}
   */
  const isFileType = computed(() => {
    return true
  })

  return {
    type,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const image = function(props, context, dependencies)
{
  const { type, isArrayType, isFileType } = file(props, context, dependencies)

  // ============== COMPUTED ==============

  const isImageType = computed(() => {
    return true
  })

  return {
    type,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const checkboxgroup = list
const dates = list
const multiselect = list
const tags = list

export {
  list,
  checkboxgroup,
  dates,
  multiselect,
  tags,
  file,
  image,
} 

export default base