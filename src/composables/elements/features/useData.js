import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useData(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const dirt = dependencies.dirt
  const clean = dependencies.clean
  const resetValidators = dependencies.resetValidators
  const validate = dependencies.validate
  const fireChange = dependencies.fireChange
  const default_ = dependencies.default
  const nullValue = dependencies.nullValue

  // =============== OPTIONS ===============

  const shouldValidateOnChange = form$.value.shouldValidateOnChange

  // ============== COMPUTED ===============

  /**
  * Whether the element's value should be submitted.
  * 
  * @type {boolean} 
  * @default true
  */
  const submit = computed(computedOption('submit', schema, true))

  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  const formatData = computed(computedOption('formatData', schema, (name, val, form$) => {
    return { [name]: val }
  }))

  /**
   * A function that formats data before [.load](#method-load) to the element.
   * 
   * @type {function}
   */
  const formatLoad = computed(computedOption('formatLoad', schema, (val, form$) => {
    return val
  }))

  /**
   * An object containing the element `name` as a key and its `value` as value.
   * 
   * @type {object}
   */
  const data = computed(() => {
    return formatData.value(name.value, value.value, form$.value)
  })
  
  /**
   * An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.
   * 
   * @type {object}
   */
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }

    return data.value
  })

  // =============== METHODS ===============

  /**
   * Loads data for element or clears the element if the element's key is not found in the `data` object.  Sets `dirty` to `false`.
   *
   * @param {object} data an object containing data for the element using its **name as key**
   * @returns {void}
   */
  const load = (val, triggerChange = false, shouldValidate = false, shouldDirt = false, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined) {
      unload(triggerChange, shouldValidate, shouldDirt)
    }
    else {
      update(formatted, triggerChange, shouldValidate, shouldDirt)
    }
  }

  const unload = (triggerChange = false, shouldValidate = false, shouldDirt = false) => {
    resetValidators()
    clear(triggerChange, shouldValidate, shouldDirt)
  }

  /**
   * Updates the element's value.
   *
   * @param {any} value the value to be set for the element
   * @param {boolean} triggerChange whether the element should trigger `change` event
   * @param {boolean} shouldValidate whether the element should be validated (default: `false`)
   * @returns {void}
   */
  const update = (val, triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    value.value = val
    handleUpdated(triggerChange, shouldValidate, shouldDirt)
  }

  /**
   * Clears the value of the element.
   *
   * @public
   * @returns {void}
   */
  const clear = (triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    value.value = _.clone(nullValue.value)
    handleUpdated(triggerChange, shouldValidate, shouldDirt)
  }

  /**
   * Resets the element to it's default state.
   *
   * @public
   * @returns {void}
   */
  const reset = (triggerChange = true) => {
    value.value = _.clone(default_.value)

    if (triggerChange && !_.isEqual(currentValue.value, previousValue.value)) {
      fireChange()
    }
    
    resetValidators()
  }

  const handleUpdated = (triggerChange, shouldValidate, shouldDirt) => {
    if ((triggerChange || shouldDirt) && !_.isEqual(currentValue.value, previousValue.value)) {
      if (shouldDirt) {
        dirt()
      }

      if (triggerChange) {
        fireChange()
      }
    }

    if (shouldValidate) {
      validate()
    }
  }

  /**
   * Prepares the element for submission.
   *
   * @public
   * @returns {void}
   */
  const prepare = async () => {}

  // =============== HOOKS ================

  if (nullValue !== undefined) {
    previousValue.value = _.clone(nullValue.value)
  }

  if (default_ !== undefined) {
    value.value = _.clone(default_.value)
  }

  return {
    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,

    // Mehtods
    load,
    unload,
    update,
    clear,
    reset,
    prepare,
  }
}