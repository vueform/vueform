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
  
  return {
    handleBlur,
  }
}

export default base