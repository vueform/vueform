const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  /**
   * Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.
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