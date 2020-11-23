import { computed } from 'composition-api'
import useValueSelect from './useValueSelect'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const { previousValue, currentValue, value, selectOptions, getOption } = useValueSelect(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      let values = value.value === null ? [] : value.value

      if (!isNative.value) {
        values = []

        _.each(value.value, (option) => {
          values.push(getOption(option))
        })
      }

      return values
    },
    set(val) {
      let values = val

      if (!isNative.value) {
        values = []

        _.each(val, (option) => {
          values.push(option.value)
        })
      }

      value.value = values
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
    selectOptions,

    getOption,
  }
}