import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    parent,
    conditions: conditionList,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path || ref(null)
  const el$ = dependencies.el$ || ref(undefined)

  // ================ DATA ================

  /**
   * The frozen conditions of the element.
   * 
   * @type {array}
   * @private
   */
  const conditions = ref(conditionList.value)
  
  // ============== COMPUTED ==============

  /**
   * Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.
   * 
   * @type {boolean}
   */
  const available = computed(() => {
    if (!form$.value.conditions) {
      return true
    } 

    if (parent && parent.value && parent.value.available !== undefined && !parent.value.available) {
      return false
    }

    if (!conditions.value || !conditions.value.length) {
      return true
    }

    return !_.some(conditions.value, (condition) => {
      return !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value)
    })
  })

  /**
   * Updates element conditions after they have been changed.
   * 
   * @returns {void}
   */
  const updateConditions = () => {
    conditions.value = conditionList.value
  }

  return {
    available,
    updateConditions,
  }
}

export default base