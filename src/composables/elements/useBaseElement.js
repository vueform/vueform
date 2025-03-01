import lowerFirst from 'lodash/lowerFirst'
import {
  computed, getCurrentInstance, provide, toRefs, onBeforeMount, onMounted, onBeforeUpdate,
  onUpdated, onBeforeUnmount, onUnmounted, ref,
} from 'vue'
import useParentAssign from './../useParentAssign'

const base = function(props, context, dependencies)
{
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
  const el$ = dependencies.el$
  const fire = dependencies.fire
  
  const {
    assignToParent,
    removeFromParent,
  } = useParentAssign(props, context, {
    form$,
  })
  
  // ================= DATA ================
  
  /**
   * The ref to the outermost DOM of the element.
   *
   * @type {HTMLElement}
   */
  const container = ref(null)
  
  /**
   * Whether the element has been already mounted.
   *
   * @type {boolean}
   * @default true
   */
  const mounted = ref(false)
  
  /**
   * Whether the element is hidden internally by core components like tabs or steps. Only intended for reading.
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
   * @private
   */
  const isStatic = computed(() => {
    return false
  })
  
  /**
   * Whether the element's value is a file.
   *
   * @type {boolean}
   * @private
   */
  const isFileType = computed(() => {
    return false
  })
  
  /**
   * Whether the element's value is an image.
   *
   * @type {boolean}
   * @private
   */
  const isImageType = computed(() => {
    return false
  })
  
  /**
   * Whether the element's value is an array.
   *
   * @type {boolean}
   * @private
   */
  const isArrayType = computed(() => {
    return false
  })
  
  /**
   * Whether the element is a nested object.
   *
   * @type {boolean}
   * @private
   */
  const isObjectType = computed(() => {
    return false
  })
  
  /**
   * Whether the element is a nested group.
   *
   * @type {boolean}
   * @private
   */
  const isGroupType = computed(() => {
    return false
  })
  
  /**
   * Whether the element is a list.
   *
   * @type {boolean}
   * @private
   */
  const isListType = computed(() => {
    return false
  })
  
  /**
   * Whether the element is a matrix.
   *
   * @type {boolean}
   * @private
   */
  const isMatrixType = computed(() => {
    return false
  })
  
  /**
   * Whether the element is a grid.
   *
   * @type {boolean}
   * @private
   */
  const isGridType = computed(() => {
    return false
  })
  
  /**
   * Whether the element should be visible when using `tabs` or `steps`.
   *
   * @type {boolean}
   * @private
   */
  const isActive = computed(() => {
    return active.value
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
  
  // ================ HOOKS ===============
  
  onBeforeMount(() => {
    assignToParent(currentInstance.proxy.$parent, assignToParent)
  })
  
  onMounted(() => {
    mounted.value = true
  })
  
  onBeforeUnmount(() => {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent)
  })

  Object.values(instantHooks).forEach((hook) => {
    fire(lowerFirst(hook.replace('on', '')), el$.value)
  })
  
  Object.keys(hooks).forEach((hook) => {
    hooks[hook](() => {
      fire(lowerFirst(hook.replace('on', '')), el$.value)
    })
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
    isMatrixType,
    isGridType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const list = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isArrayType = computed(() => {
    return true
  })

  const isListType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const checkboxgroup = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
    isMatrixType,
    isGridType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isArrayType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const object = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isObjectType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const group = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isGroupType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const matrix = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
    isGridType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isMatrixType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const grid = function(props, context, dependencies)
{
  const {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
    isMatrixType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isGridType = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const file = function(props, context, dependencies)
{
  const {
    view,
  } = toRefs(props)
  
  const {
    isStatic,
    isArrayType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isFileType = computed(() => {
    return true
  })
  
  const isImageType = computed(() => {
    return ['gallery', 'image'].indexOf(view.value) !== -1
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const static_ = function(props, context, dependencies)
{
  const {
    isArrayType,
    isFileType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const isStatic = computed(() => {
    return true
  })
  
  return {
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isMatrixType,
    isGridType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const dates = checkboxgroup
const multiselect = checkboxgroup
const tags = checkboxgroup

export {
  object,
  group,
  matrix,
  list,
  checkboxgroup,
  dates,
  multiselect,
  tags,
  file,
  static_,
  grid,
}

export default base