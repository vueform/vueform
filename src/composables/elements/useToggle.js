import { toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    trueValue,
    falseValue,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const update = dependencies.update
  
  // =============== METHODS ==============
  
  /**
   * Sets the toggle to `on` ([`trueValue`](#option-true-value)).
   *
   * @returns {void}
   */
  const check = () => {
    update(trueValue.value)
  }
  
  /**
   * Sets the toggle to `off` ([`falseValue`](#option-false-value)).
   *
   * @returns {void}
   */
  const uncheck = () => {
    update(falseValue.value)
  }
  
  return {
    check,
    uncheck,
  }
}

const checkbox = function(props, context, dependencies)
{
  const {
    trueValue,
    falseValue,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const update = dependencies.update
  
  // =============== METHODS ==============
  
  /**
   * Checks the checkbox.
   *
   * @returns {void}
   */
  const check = () => {
    update(trueValue.value)
  }
  
  /**
   * Unchecks the checkbox.
   *
   * @returns {void}
   */
  const uncheck = () => {
    update(falseValue.value)
  }
  
  return {
    check,
    uncheck,
  }
}

export {
  checkbox,
}

export default base