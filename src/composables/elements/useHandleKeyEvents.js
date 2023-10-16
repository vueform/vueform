const base = function(props, context, dependencies)
{
  const { fire, el$ } = dependencies
  
  // =============== METHODS ==============
  
  /**
   * Handles `keydown` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeydown = (e) => {
    fire('keydown', e, el$.value)
  }
  
  /**
   * Handles `keyup` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeyup = (e) => {
    fire('keyup', e, el$.value)
  }
  
  /**
   * Handles `keypress` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeypress = (e) => {
    fire('keypress', e, el$.value)
  }
  
  return {
    handleKeydown,
    handleKeyup,
    handleKeypress,
  }
}

export default base