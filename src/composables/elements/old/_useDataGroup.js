import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useDataObject from './useDataObject'

export default function(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { submit, update, clear, reset, prepare } = useDataObject(props, context, dependencies)

  const form$ = dependencies.form$
  const children$ = dependencies.children$
  const value = dependencies.value
  const available = dependencies.available

  // ============== COMPUTED ===============

  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  const formatData = computedOption('formatData', schema, (name, val, form$) => {
    return val
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

  // Required because of different `formatLoad`
  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    _.each(children$.value, (element$) => {
      element$.load(element$.flat ? formatted : formatted[element$.name], format)
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