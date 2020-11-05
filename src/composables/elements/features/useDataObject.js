import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useData from './useData'

export default function useGroupData(props, context, dependencies)
{
  const { name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { submit, data, formatData, formatLoad, prepare } = useData(props, context, dependencies)

  const form$ = dependencies.form$
  const available = dependencies.available
  const children$ = dependencies.children$
  const clean = dependencies.clean
  const resetValidators = dependencies.resetValidators

  // ============== COMPUTED ===============
  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  
  const filtered = computed(() => {
    if (!available.value || !submit.value) {
      return {}
    }
    
    let filtered = {}

    _.each(children$.value, (element$) => {
      filtered = Object.assign({}, filtered, element$.filtered)
    })

    return formatData.value(name.value, filtered, form$.value)
  })

  // =============== METHODS ===============

  const load = (val, triggerChange = false, shouldValidate = false, shouldDirt = false, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    _.each(children$.value, (element$) => {
      element$.load(element$.flat ? formatted : formatted[element$.name], triggerChange, shouldValidate, shouldDirt, format)
    })
  }

  const update = (val, triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    _.each(children$.value, (element$) => {
      if (val[element$.name] === undefined && !element$.flat) {
        return
      }
      element$.update(element$.flat ? val : val[element$.name], triggerChange, shouldValidate, shouldDirt)
    })
  }

  const clear = (triggerChange = true, shouldValidate = form$.value.shouldValidateOnChange, shouldDirt = true) => {
    _.each(children$.value, (element$) => {
      element$.clear(triggerChange, shouldValidate, shouldDirt)
    })
  }

  const reset = (triggerChange = true) => {
    _.each(children$.value, (element$) => {
      element$.reset(triggerChange)
    })
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
    update,
    clear,
    reset,
    prepare,
  }
}