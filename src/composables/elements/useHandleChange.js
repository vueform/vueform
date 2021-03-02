const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @returns {void}
   * @private
   */
  const handleChange = (val) => {
    value.value = val
  }

  return {
    handleChange,
  }
}

export default base