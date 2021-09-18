import {
  computed, getCurrentInstance, provide, toRefs, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, ref,
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

  // ================ DATA ================

  /**
   * Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.
   * 
   * @type {boolean} 
   * @default true
   * @private
   */
  const active = ref(true)

  // ============== COMPUTED ==============

  /**
   * Whether the element is static (does not have any data or validation).
   * 
   * @type {boolean}
   */
  const isStatic = computed(() => {
    return false
  })

  /**
   * Whether the element's value is a file.
   *
   * @type {boolean}
   */
  const isFileType = computed(() => {
    return false
  })

  /**
   * Whether the element's value is an image.
   *
   * @type {boolean}
   */
  const isImageType = computed(() => {
    return false
  })

  /**
   * Whether the element's value is an array.
   *
   * @type {boolean}
   */
  const isArrayType = computed(() => {
    return false
  })

  /**
   * Whether the element should be visible when using `tabs` or `steps`.
   * 
   * @type {boolean}
   */
  const isActive = computed(() => {
    return active.value
  })

  /**
   * The element's component.
   *
   * @type {component}
   */
  const el$ = computed(() => {
    return currentInstance.proxy
  })

  // ============== METHODS ===============

  /**
   * Sets the `active` property of the element to `true`.
   *
   * @returns {void}
   * @private
   */
  const activate = () => {
    active.value = true
  }

  /**
   * Sets the `active` property of the element to `false`.
   *
   * @returns {void}
   * @private
   */
  const deactivate = () => {
    active.value = false
  }

  // ============== PROVIDES ==============

  /**
   * The element's component.
   *
   * @type {component}
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
      propRefs[hook].value(currentInstance.proxy)
    }
  })

  Object.keys(hooks).forEach((hook) => {
    if (propRefs[hook].value) {
      hooks[hook](() => {
        propRefs[hook].value(currentInstance.proxy)
      })
    }
  })

  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    activate,
    deactivate,
  }
}

const list = function(props, context, dependencies)
{
  const {
    el$,
    isStatic,
    isFileType,
    isImageType,
    isActive,
    active,
    activate,
    deactivate,
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
    isActive,
    active,
    activate,
    deactivate,
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
    isActive,
    active,
    activate,
    deactivate,
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
    isActive,
    active,
    activate,
    deactivate,
  }
}

const static_ = function(props, context, dependencies)
{
  const {
    el$,
    isArrayType,
    isFileType,
    isImageType,
    isActive,
    active,
    activate,
    deactivate,
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
    isActive,
    active,
    activate,
    deactivate,
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