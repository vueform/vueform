import each from 'lodash-es/each'
import isArray from 'lodash-es/isArray'
import clone from 'lodash-es/clone'
import map from 'lodash-es/map'
import { computed, ref, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    disabled,
  } = toRefs(props)
  
  // ================ DATA ================
  
  /**
   * Helper to store whether the element is disabled via api (with .disable()).
   *
   * @type {boolean|null}
   * @default null
   * @private
   */
  const localDisabled = ref(null)
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element is disabled.
   *
   * @type {boolean}
   */
  const isDisabled = computed(() => {
    return (disabled.value && localDisabled.value !== false) || localDisabled.value === true
  })
  
  // =============== METHODS ==============
  
  /**
   * Disables the element.
   *
   * @returns {void}
   */
  const disable = () => {
    localDisabled.value = true
  }
  
  /**
   * Enables the element even if it is disabled by [`disabled`](#disabled) option.
   *
   * @returns {void}
   */
  const enable = () => {
    localDisabled.value = false
  }
  
  return {
    localDisabled,
    isDisabled,
    disable,
    enable,
  }
}

const checkboxgroup = function(props, context, dependencies)
{
  const {
    disables,
  } = toRefs(props)
  
  const {
    localDisabled,
    isDisabled,
  } = base(props, context, dependencies)
  
  // ================ DATA ================
  
  /**
   * List of option keys to be disabled.
   *
   * @type {array}
   * @default []
   * @private
   */
  const disabledItems = ref([])
  
  // =============== METHODS ==============
  
  /**
   * Disables one item or more items.
   *
   * @param {array|string|number} values* value(s) to disable
   * @returns {void}
   */
  const disable = (values) => {
    if (!isArray(values)) {
      values = [values]
    }
    
    const disablesList = clone(disabledItems.value)
    
    each(values, (item) => {
      item = String(item)
      
      /* istanbul ignore else */
      if (disablesList.indexOf(item) === -1) {
        disablesList.push(item)
      }
    })
    
    disabledItems.value = disablesList
  }
  
  /**
   * Disables one item or more disabled items.
   *
   * @param {array|string|number} values* value(s) to enable
   * @returns {void}
   */
  const enable = (values) => {
    if (!isArray(values)) {
      values = [values]
    }
    
    const disablesList = clone(disabledItems.value)
    
    each(values, (item) => {
      item = String(item)
      
      var index = disablesList.indexOf(item)
      
      /* istanbul ignore else */
      if (index !== -1) {
        disablesList.splice(index, 1)
      }
    })
    
    disabledItems.value = disablesList
  }
  
  /**
   * Disables all items.
   *
   * @returns {void}
   */
  const disableAll = () => {
    localDisabled.value = true
  }
  
  /**
   * Enables all items.
   *
   * @returns {void}
   */
  const enableAll = () => {
    localDisabled.value = false
    disabledItems.value = []
  }
  
  // ================ HOOKS ===============
  
  disabledItems.value = map(disables.value || /* istanbul ignore next: can't fall into this, because it is hardwired to be `[]` if undefined */ [], (d) => {
    return String(d)
  })
  
  return {
    disabledItems,
    isDisabled,
    disableAll,
    enableAll,
    disable,
    enable,
  }
}

const button = function(props, context, dependencies)
{
  const {
    disabled,
    submits,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the button is disabled.
   *
   * @type {boolean}
   */
  const isDisabled = computed(() => {
    if (typeof disabled.value === 'function') {
      return disabled.value(el$.value, form$.value)
    }
    
    if (submits.value && ((form$.value.invalid && form$.value.shouldValidateOnChange) || form$.value.busy || form$.value.isDisabled)) {
      return true
    }
    
    return disabled.value
  })
  
  return {
    isDisabled,
  }
}

const radiogroup = checkboxgroup

export {
  checkboxgroup,
  radiogroup,
  button,
}

export default base