import { computed, ref, watch } from 'composition-api'
import useValue from './useValue'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const { previousValue, currentValue, model } = useValue(props, context, dependencies)

  // ============== PRIVATE ================

  const toStringArray = (val) => {
    return _.map(val, v => String(v))
  }

  // ============== COMPUTED ===============

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  const value = computed({
    get() {
      return toStringArray(currentValue.value)
    },
    set(val) {
      previousValue.value = toStringArray(currentValue.value)
      currentValue.value = toStringArray(val)
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