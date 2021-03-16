import {
  computed, getCurrentInstance, provide, toRefs, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered,
} from 'composition-api'

import useParentAssign from './../useParentAssign'

const base = function(props, context, dependencies)
{
  const propRefs = toRefs(props)

  const instantHooks = [
    'onBeforeCreate',
    'onCreated',
  ]

  const hooks = {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
  }

  const currentInstance = getCurrentInstance()

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  
  const {
    assignToParent,
    removeFromParent
  } = useParentAssign(props, context, {
    form$,
  })

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {boolean}
   */
  const isStatic = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is a file.
   *
   * @type {boolean}
   */
  const isFileType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an image.
   *
   * @type {boolean}
   */
  const isImageType = computed(() => {
    return false
  })

  /**
   * Determines if the element's value is an array.
   *
   * @type {boolean}
   */
  const isArrayType = computed(() => {
    return false
  })

  /**
   * 
   *
   * @type {object<Element>}
   */
  const el$ = computed(() => {
    return currentInstance.proxy
  })

  // ============== PROVIDES ==============

  /**
   * 
   *
   * @type {component<Element>}
   */
  provide('el$', el$)

  // ================ HOOKS ===============

  onBeforeMount(() => {
    assignToParent(currentInstance.proxy.$parent, assignToParent)
  })

  onBeforeUnmount(() => {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent)
  })

  Object.values(instantHooks).forEach((hook) => {
    if (propRefs[hook].value) {
      propRefs[hook].value.apply(currentInstance.proxy)
    }
  })

  Object.keys(hooks).forEach((hook) => {
    if (propRefs[hook].value) {
      hooks[hook](() => {
        propRefs[hook].value.call(currentInstance.proxy)
      })
    }
  })

  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const list = function(props, context, dependencies)
{
  const {
    el$,
    isStatic,
    isFileType,
    isImageType,
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const isArrayType = computed(() => {
    return true
  })

  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const file = function(props, context, dependencies)
{
  const {
    image,
  } = toRefs(props)

  const {
    el$,
    isStatic,
    isArrayType,
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const isFileType = computed(() => {
    return true
  })

  const isImageType = computed(() => {
    return image.value
  })

  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
  }
}

const static_ = function(props, context, dependencies)
{
  const {
    el$,
    isArrayType,
    isFileType,
    isImageType
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  const isStatic = computed(() => {
    return true
  })

  return {
    el$,
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
  static_,
} 

export default base