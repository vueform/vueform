import { computed } from 'composition-api'
import useValue from './useValue'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const radioValue = dependencies.radioValue
  const nullValue = dependencies.nullValue
  const { previousValue, currentValue } = useValue(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return model.value ? radioValue.value : nullValue.value
    },
    set(val) {
      model.value = val == radioValue.value
    }
  })

  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      return currentValue.value == radioValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)

      currentValue.value = val ? radioValue.value : nullValue.value
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}