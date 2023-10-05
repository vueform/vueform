const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const value = dependencies.value
  
  // =============== METHODS ==============
  
  /**
   * Handles `change` event.
   *
   * @param {string} val* value of the element
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