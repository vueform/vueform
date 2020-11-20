import { computed } from 'composition-api'
import useValueDate from './useValueDate'
import checkDateFormat from './../../../utils/checkDateFormat'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const valueFormat = dependencies.valueFormat
  const { currentValue, previousValue } = useValueDate(props, context, dependencies)

  // ============== COMPUTED ===============

  // Is always a Date instance
  const model = computed({
    get() {
      return currentValue.value
    },
    set(val) {
      if (!_.isArray(val)) {
        throw new Error('Dates model must an array')
      }

      _.each(val, (v) => {
        if (!_.isEmpty(v) && !(v instanceof Date)) {
          throw new Error('Date model must be an array of `Date` instances')
        }
      })
      
      previousValue.value = _.clone(currentValue.value)
      currentValue.value = val
    }
  })

  const value = computed({
    get() {
      if (valueFormat.value === false) {
        return model.value
      }

      return _.map(model.value, (val) => {
        return moment(val).format(valueFormat.value)
      })
    },
    set(val) {
      if (!_.isArray(val)) {
        throw new Error('Dates value must an array')
      }

      model.value = _.map(val, (v) => {
        checkDateFormat(valueFormat.value, v)

        return v instanceof Date ? v : moment(v, valueFormat.value, true).toDate()
      })
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