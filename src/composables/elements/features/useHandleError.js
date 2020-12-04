const base = function useTrix (props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const listeners = dependencies.listeners

  // =============== METHODS ==============

  /**
   * Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.
   *
   * @public
   * @param {string} message message to display.
   * @event error
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