import { computed, toRefs, ref } from 'composition-api'
import computedOption from './../utils/computedOption'

export default function useConditions(props, context, dependencies)
{
  const { parent } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path || ref(null)
  const descriptor = dependencies.descriptor

  // ============== COMPUTED ==============

  /**
   * Conditions to be applied for the element.
   * 
   * @type {array} 
   * @default []
   */
  const conditions = computedOption('conditions', descriptor, [])

  /**
   * Whether all element conditions are met (if any).
   * 
   * @type {boolean}
   */
  const available = computed(() => {
    if (parent && parent.value && parent.value.available !== undefined && !parent.value.available) {
      return false
    }

    if (!conditions.value || !conditions.value.length) {
      return true
    }

    return !_.some(conditions.value, (condition) => {
      return !form$.value.$laraform.services.condition.check(condition, path.value, form$.value)
    })
  })

  return {
    available,
    conditions,
  }
}