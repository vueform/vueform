import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useConditions(props, context, dependencies)
{
  const { schema, parent } = toRefs(props)

  // ============ DEPENDENCIES ============

  const { form$ } = dependencies.form$
  const { path } = dependencies.path

  // ============== COMPUTED ==============

  /**
   * Conditions to be applied for the element.
   * 
   * @type {array} 
   * @default []
   */
  const conditions = computed(computedOption('conditions', schema, []))

  /**
   * Whether all element conditions are met (if any).
   * 
   * @type {boolean}
   */
  const available = computed(() => {

    if (parent && parent.available !== undefined && !parent.available) {
      return false
    }

    if (!conditions.value || !conditions.value.length) {
      return true
    }

    return !_.some(conditions.value, (condition) => {
      return !form$.$laraform.services.condition.check(condition, path.value, form$)
    })
  })

  return {
    available,
    conditions,
  }
}