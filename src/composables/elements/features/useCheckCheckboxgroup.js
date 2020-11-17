import useCheck from './useCheck'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const items = dependencies.items
  const { check, uncheck } = useCheck(props, context, dependencies)

  // =============== METHODS ==============

  /**
   * Checks all checkboxes.
   *
   * @public
   * @returns {void}
   */
  const checkAll = () => {
    check(_.keys(items.value))
  }

  /**
   * Checks all checkboxes.
   *
   * @public
   * @returns {void}
   */
  const uncheckAll = () => {
    uncheck(_.keys(items.value))
  }

  return {
    check,
    uncheck,
    checkAll,
    uncheckAll,
  }
}