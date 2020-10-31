import { computed, watch } from 'composition-api'
import useValue from './useValue'

export default function useNestedValue(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const { previousValue, currentValue } = useValue(props, context, dependencies)

  const children$ = dependencies.children$

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      var value = {}

      _.each(children$.value, (element$) => {
        value = Object.assign({}, value, element$.data)
      })

      return value
    },
    set(val) {
      throw new Error('A nested element\'s value cannot be set directly. Use .update() or .load() method.')
    }
  })

  watch(value, (newValue, oldValue) => {
    currentValue.value = newValue
    previousValue.value = oldValue
  })

  return {
    value,
    previousValue,
    currentValue,
  }
}