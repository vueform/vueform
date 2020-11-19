import { computed } from 'composition-api'
import useValueDate from './useValueDate'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const valueFormat = dependencies.valueFormat
  const { currentValue, previousValue, model } = useValueDate(props, context, dependencies)

  // ============== COMPUTED ===============

  const value = computed({
    get() {
      // Model has no value
      if (!model.value) {
        return model.value
      }

      // No need to format dates
      if (valueFormat.value === false) {
        return model.value
      }

      let val = []

      _.each(model.value, (date) => {
        if (date === null) {
          return
        }

        value.push(moment(date).format(valueFormat.value))
      })

      return val
    },
    set(val) {
      // Value is empty
      if (_.isEmpty(val)) {
        model.value = _.clone(nullValue.value)
        return
      }

      let values = []

      _.each(val, (v) => {
        values.push(v instanceof Date ? v : moment(v, valueFormat.value, true).toDate())
      })

      model.value = values
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