const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const listeners = dependencies.listeners

  // =============== METHODS ==============

  /**
   * Handles `error` event.
   *
   * @param {string} message* error message
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  const handleError = (message, e) => {
    fire('error', message, e)

    if (!listeners.value.error) {
      alert(message)
    } 
  }


  return {
    handleError,
  }
}

export default base