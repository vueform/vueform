import { toRefs } from 'composition-api'

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
   * Sets the toggle to `on` (`trueValue`).
   *
   * @returns {void}
   */
  const check = () => {
    update(trueValue.value)
  }

  /**
   * Sets the toggle to `off` (`falseValue`).
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

export default base