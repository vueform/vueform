import { computed, toRefs, onBeforeUnmount, getCurrentInstance, provide } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies)
{
  const { schema, name } = toRefs(props)
  const currentInstance = getCurrentInstance()

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  const type = computedOption('type', schema, schema.value.type)

  const isStatic = computed(() => {
    return false
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

  const el$ = computed(() => {
    return currentInstance.proxy
  })
  
  // =============== METHODS ==============

  // no export
  const assignToParent = ($parent, assignToParent) => {
    if ($parent.children$Map) {
      $parent.setChild$(name.value, currentInstance.proxy)
    }
    else if ($parent.children$) {
      form$.value.$set($parent.children$, name.value, currentInstance.proxy)
    }
    else if ($parent.elements$) {
      form$.value.$set($parent.elements$, name.value, currentInstance.proxy)
    }
    else {
      assignToParent($parent.$parent, assignToParent)
    }
  }

  // no export
  const removeFromParent = ($parent, removeFromParent) => {
    if ($parent.children$Map) {
      $parent.removeChild$(name.value, currentInstance.proxy)
    }
    else if ($parent.children$) {
      form$.value.$delete($parent.children$, name.value)
    }
    else if ($parent.elements$) {
      form$.value.$delete($parent.elements$, name.value)
    }
    else {
      removeFromParent($parent.$parent, removeFromParent)
    }
  }

  // ============== PROVIDES ==============

  provide('el$', el$)

  // ================ HOOKS ===============

  assignToParent(currentInstance.proxy.$parent, assignToParent)

  onBeforeUnmount(() => {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent)
  })

  return {
    el$,
    type,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const list = function(props, context, dependencies)
{
  const { el$, type, isStatic, isFileType, isImageType } = base(props, context, dependencies)

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
    el$,
    type,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const file = function(props, context, dependencies)
{
  const { el$, type, isStatic, isArrayType, isImageType } = base(props, context, dependencies)

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
    el$,
    type,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const image = function(props, context, dependencies)
{
  const { type, isStatic, isArrayType, isFileType } = file(props, context, dependencies)

  // ============== COMPUTED ==============

  const isImageType = computed(() => {
    return true
  })

  return {
    el$,
    type,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const static_ = function(props, context, dependencies)
{
  const { el$, type, isArrayType, isFileType, isImageType } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const isStatic = computed(() => {
    return true
  })

  return {
    el$,
    type,
    isStatic,
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
  static_,
} 

export default base