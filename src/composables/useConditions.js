import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { parent, conditions } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path || ref(null)

  // ============== COMPUTED ==============

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
  }
}

export default base