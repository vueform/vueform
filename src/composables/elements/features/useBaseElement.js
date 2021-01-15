import { computed, toRefs, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, getCurrentInstance, provide } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import normalize from './../../../utils/normalize'

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
    if ($parent.children$Array) {
      $parent.children$Array.push(currentInstance.proxy)
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
    if ($parent.children$Array) {
      $parent.children$Array.splice($parent.children$Array.map(e$=>normalize(e$.name)).indexOf(normalize(name.value)), 1)
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

  onBeforeMount(() => {
    // console.log('mounted ', name.value)
    assignToParent(currentInstance.proxy.$parent, assignToParent)
  })

  onBeforeUnmount(() => {
    // console.log('unmounted ', name.value)
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