import { computed } from 'composition-api'
import useValue from './useValue'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueFormat = dependencies.valueFormat
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
        throw new Error('Date value must be an instance of `Date`')
      }

      model.value = val
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