import { computed, nextTick, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import useNestedData from './useNestedData'

export default function useGroupData(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { data, filtered, formatLoad, submit, update, clear, reset, prepare } = useNestedData(props, context, dependencies)

  const form$ = dependencies.form$

  // ============== COMPUTED ===============
  /**
   * A function that formats data before gets merged with form `data`.
   * 
   * @type {function}
   */
  const formatData = computed(computedOption('formatData', schema, (elName, value, form$) => {
    return value
  }))

  // =============== METHODS ===============

  const load = (data) => {
    let formattedData = formatLoad(data, form$.value)

    _.each(this.children$, (element$) => {
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