import useData from './useData'
import checkDateFormat from './../../../utils/checkDateFormat'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat
  const value = dependencies.value
  const available = dependencies.available
  const loadFormat = dependencies.loadFormat

  const {
    submit, formatData, formatLoad, data, filtered, changed,
    update, clear, reset, updated, prepare
  } = useData(props, context, dependencies, {
    setValue: (val) => {
      if (_.isEmpty(val) && !(val instanceof Date)) {
        value.value =  _.clone(nullValue.value)
        return
      }

      checkDateFormat(valueFormat.value, val)

      value.value = val instanceof Date ? val : moment(val, valueFormat.value).toDate()
    }
  })

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted = format ? formatLoad.value(val, form$.value) : val

    if (!available.value || formatted === undefined || (_.isEmpty(formatted) && !(formatted instanceof Date))) {
      value.value =  _.clone(nullValue.value)
      return
    }

    checkDateFormat(loadFormat.value, formatted)

    value.value = formatted instanceof Date ? formatted : moment(formatted, loadFormat.value).toDate()
  }

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