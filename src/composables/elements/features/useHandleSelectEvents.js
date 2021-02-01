const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  // =============== METHODS ==============

  /**
   * Triggered when the user selects an option using non-native element.
   *
   * @param {object} option* the selected option object.
   * @returns {void}
   * @private
   */
  const handleSelect = (option) => {
    fire('select', option)
  }

  /**
   * Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.
   *
   * @param {object} option* the deselected option object.
   * @returns {void}
   * @private
   */
  const handleDeselect = (option) => {
    fire('deselect', option)
  }

  /**
   * Triggered when the user changes the search criteria using non-native element.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  const handleSearchChange = (searchQuery) => {
    fire('searchChange', searchQuery)
  }

  /**
   * Triggered when the option list is opened using non-native element.
   *
   * @returns {void}
   * @private
   */
  const handleOpen = () => {
    fire('open')
  }

  /**
   * Triggered when the option list is closed using non-native element.
   *
   * @event close
   * @returns {void}
   * @private
   */
  const handleClose = () => {
    fire('close')
  }

  /**
   * Triggered when the user creates a tag using non-native element.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  const handleTag = (searchQuery) => {
    // unimplemented
  }

  // =============== HOOKS ================

  return {
    handleSelect,
    handleDeselect,
    handleSearchChange,
    handleOpen,
    handleClose,
    handleTag,
  }
}

export default base