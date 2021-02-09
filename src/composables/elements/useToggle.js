import { toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    trueValue,
    falseValue
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const update = dependencies.update

  // =============== METHODS ==============

  /**
   * Checks the checkbox.
   *
   * @param {boolean} triggerChange whether the element should trigger `change` event
   * @returns {void}
   */
  const check = () => {
    update(trueValue.value)
  }

  /**
   * Unhecks the checkbox.
   *
   * @param {boolean} triggerChange whether the element should trigger `change` event
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

export default base