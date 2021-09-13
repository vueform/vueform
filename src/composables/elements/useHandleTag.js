const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  const handleTag = (searchQuery) => {
    fire('tag', searchQuery)
  }

  return {
    handleTag,
  }
}

export default base