export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const update = dependencies.update
  const trueValue = dependencies.trueValue
  const falseValue = dependencies.falseValue

  // =============== METHODS ==============

  /**
   * Checks the checkbox.
   *
   * @public
   * @param {boolean} triggerChange whether the element should trigger `change` event
   * @returns {void}
   */
  const check = () => {
    update(trueValue.value)
  }

  /**
   * Unhecks the checkbox.
   *
   * @public
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