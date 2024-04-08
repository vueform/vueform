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
   * Whether the element should be visible when using `tabs` or `steps`.
   *
   * @type {boolean}
   * @private
   */
  const isActive = computed(() => {
    return active.value
  })
  
  /**
   * The element's component.
   *
   * @type {VueformElement}
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
   * @type {VueformElement}
   */
  provide('el$', el$)
  
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
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
    el$,
    isStatic,
    isFileType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isArrayType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isArrayType,
    isFileType,
    isImageType,
    isObjectType,
    isGroupType,
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
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isObjectType,
    isGroupType,
    isListType,
    isActive,
    active,
    mounted,
    container,
    activate,
    deactivate,
  }
}

const checkboxgroup = list
const dates = list
const multiselect = list
const tags = list

export {
  object,
  group,
  list,
  checkboxgroup,
  dates,
  multiselect,
  tags,
  file,
  static_,
}

export default base