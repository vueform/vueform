import _ from 'lodash'
import { computed, toRefs, ref, watch } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    parent,
    conditions,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path || ref(null)
  const el$ = dependencies.el$ || ref(undefined)

  // ================ DATA ================

  /**
   * The current conditions of the element.
   * 
   * @type {array}
   * @private
   */
  const conditionList = ref(conditions.value)

  const additionalConditions = ref({})
  
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

    if (!conditionList.value || !conditionList.value.length) {
      return true
    }

    return !_.some(conditionList.value, (condition) => {
      return !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value)
    })
  })

  /**
   * Updates element conditions after they have been changed.
   * 
   * @returns {void}
   * @private
   */
  const updateConditions = () => {
    conditionList.value = Object.values(additionalConditions.value).reduce((prev, curr) => {
      return prev.concat(curr)
    }, conditions.value)
  }

  const addConditions = (key, conditions) => {
    additionalConditions.value[key] = conditions

    updateConditions()
  }

  const removeConditions = (key) => {
    delete additionalConditions.value[key]

    updateConditions()
  }

  // Conditions should not be watched, because if they
  // are defined inline they will trigger infinite updates
  // watch(conditions, () => {
  //   updateConditions()
  // }, { immediate: false, deep: true })

  return {
    conditionList,
    available,
    updateConditions,
    addConditions,
    removeConditions,
  }
}

export default base