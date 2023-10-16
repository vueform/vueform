const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const model = dependencies.model
  
  // =============== METHODS ==============
  
  /**
   * Handles `input` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleInput = (e) => {
    model.value = e.target.value
  }
  
  return {
    handleInput,
  }
}

export default base