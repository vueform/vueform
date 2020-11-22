export default function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  /**
   * Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.
   *
   * @public
   * @event tag
   * @param {string} searchQuery the current search query.
   */
  const handleTag = (searchQuery) => {
    fire('tag', searchQuery)
  }

  return {
    handleTag,
  }
}