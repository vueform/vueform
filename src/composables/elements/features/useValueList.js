import { computed, watch } from 'composition-api'
import useValue from './useValue'

export default function useListValue(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const { previousValue, currentValue } = useValue(props, context, dependencies)

  const child$ = dependencies.child$

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      let value = []

      _.each(child$.value, (element$) => {
        value.push(element$.value)
      })

      return value
    },
    set(val) {
      throw new Error('A list element\'s value cannot be set directly. Use .update() or .load() method.')
    }
  })

  watch(value, (newValue, oldValue) => {
    currentValue.value = newValue
    previousValue.value = oldValue
  }, { flush: 'post' })

  return {
    value,
    previousValue,
    currentValue,
  }
}