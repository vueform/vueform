const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const el$ = dependencies.el$
  
  // =============== METHODS ==============
  
  /**
   * Handles `blur` event.
   *
   * @returns {void}
   * @private
   */
  const handleBlur = () => {
    fire('blur', el$.value)
  }
  
  /**
   * Handles `focus` event.
   *
   * @returns {void}
   * @private
   */
  const handleFocus = () => {
    fire('focus', el$.value)
  }
  
  return {
    handleBlur,
    handleFocus,
  }
}

export default base