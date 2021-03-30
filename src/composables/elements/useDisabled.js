import { computed, ref, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    disabled
  } = toRefs(props)

  // ================ DATA ================

  const localDisabled = ref(null)

  // ============== COMPUTED ==============

  const isDisabled = computed(() => {
    return (disabled.value && localDisabled.value !== false) || localDisabled.value === true
  })

  // =============== METHODS ==============

  /**
   * Disabled the field.
   *
   * @returns {void}
   */
  const disable = () => {
    localDisabled.value = true
  }

  /**
   * Enables the field.
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
   * @option
   */
  const disabledItems = ref([])

  // =============== METHODS ==============

  /**
   * Disables an item or items.
   *
   * @param {array|string|number} items* Key of one or more items to disable.
   * @returns {void}
   */
  const disable = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const disablesList = _.clone(disabledItems.value)

    _.each(items, (item) => {
      item = String(item)
      
      if (disablesList.indexOf(item) === -1) {
        disablesList.push(item)
      }
    })

    disabledItems.value = disablesList
  }

  /**
   * Enables an item or items.
   *
   * @param {array|string|number} items* Key of one or more items to enable.
   * @returns {void}
   */
  const enable = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const disablesList = _.clone(disabledItems.value)

    _.each(items, (item) => {
      item = String(item)
      
      var index = disablesList.indexOf(item)

      if (index !== -1) {
        disablesList.splice(index, 1)
      }
    })

    disabledItems.value = disablesList
  }

  /**
   * Disabled all items.
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

  disabledItems.value = _.map(disables.value || [], (d) => {
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

  const isDisabled = computed(() => {
    if (typeof disabled.value === 'function') {
      return disabled.value(form$.value, el$.value)
    }
    
    if (submits.value && ((form$.value.invalid && form$.value.shouldValidateOnChange) || form$.value.busy)) {
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