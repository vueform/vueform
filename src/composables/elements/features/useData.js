import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const available = dependencies.available
  const value = dependencies.value
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const dirt = dependencies.dirt
  const resetValidators = dependencies.resetValidators
  const validate = dependencies.validate
  const fire = dependencies.fire
  const default_ = dependencies.default
  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * Whether the element's value should be submitted.
  * 
  * @type {boolean} 
  * @default true
  */
  const submit = computedOption('submit', schema, true)

  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  const formatData = computedOption('formatData', schema, (name, val, form$) => {
    return { [name]: val }
  })

  /**
   * A function that formats data before [.load](#method-load) to the element.
   * 
   * @type {function}
   */
  const formatLoad = computedOption('formatLoad', schema, (val, form$) => {
    return val
  })

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

  const changed = computed(() => {
    return !_.isEqual(currentValue.value, previousValue.value)
  })

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    value.value = available.value && formatted !== undefined ? formatted : _.clone(nullValue.value)
  }

  const update = (val) => {
    value.value = val

    updated()
  }

  const clear = () => {
    value.value = _.clone(nullValue.value)

    updated()
  }

  const reset = () => {
    value.value = _.clone(default_.value)

    resetValidators()

    if (changed.value) {
      fire('change', currentValue.value, previousValue.value)
    }
  }

  const updated = () => {
    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
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

  return {
    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,
    changed,

    // Mehtods
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}