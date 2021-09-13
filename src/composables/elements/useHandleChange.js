const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value

  // =============== METHODS ==============

  /**
   * Handles `change` event.
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