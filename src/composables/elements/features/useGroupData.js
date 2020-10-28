import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useNestedData from './useNestedData'

export default function useGroupData(props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { formatLoad, submit, update, clear, reset, prepare } = useNestedData(props, context, dependencies)

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
  const formatData = computed(computedOption('formatData', schema, (elName, value, form$) => {
    return value
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

  const load = (data) => {
    let formattedData = formatLoad.value(data, form$.value)

    _.each(children$.value, (element$) => {
      element$.load(formattedData)
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