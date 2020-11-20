import { computed } from 'composition-api'
import checkDateFormat from '../../../utils/checkDateFormat'
import useValue from './useValue'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueFormat = dependencies.valueFormat
  const nullValue = dependencies.nullValue
  const { currentValue, previousValue } = useValue(props, context, dependencies)

  // ============== COMPUTED ===============

  // Is always a Date instance
  const model = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      if (!_.isEmpty(val) && !(val instanceof Date)) {
        throw new Error('Date model must be an instance of `Date`')
      }
      
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val
    }
  })

  const value = computed({
    get() {
      // If model is empty or no need to convert return Date instance
      if (!model.value || valueFormat.value === false) {
        return model.value
      }

      return moment(model.value).format(valueFormat.value)
    },
    set(val) {
      if (!_.isEmpty(val) && !(val instanceof Date)) {
        model.value = nullValue.value
        return
      }

      checkDateFormat(valueFormat.value, val)

      model.value = val instanceof Date ? val : moment(val, valueFormat.value, true).toDate()
    }
  })

  return {
    // Computed
    value,
    model,
    previousValue,
    currentValue,
  }
}