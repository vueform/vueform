const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const el$ = dependencies.el$
  
  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  const handleTag = (searchQuery) => {
    fire('tag', searchQuery, el$.value)
  }
  
  return {
    handleTag,
  }
}

export default base