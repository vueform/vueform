const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const listeners = dependencies.listeners
  
  // =============== METHODS ==============
  
  /**
   * Handles `error` event.
   *
   * @param {Error} error* the error object
   * @returns {void}
   * @private
   */
  const handleError = (error) => {
    fire('error', error)
  }
  
  return {
    handleError,
  }
}

export default base