import { computed, toRefs } from 'composition-api'
import useValue from './useValue'

export default function useValueToggle (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const trueValue = dependencies.trueValue
  const falseValue = dependencies.falseValue
  const { previousValue, currentValue } = useValue(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return model.value ? trueValue.value : falseValue.value
    },
    set(val) {
      model.value = val == trueValue.value
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
      return currentValue.value == trueValue.value
    },
    set(val) {
      previousValue.value = _.clone(currentValue.value)

      currentValue.value = val ? trueValue.value : falseValue.value
    }
  })

  return {
    value,
    model,
    previousValue,
    currentValue,
  }
}