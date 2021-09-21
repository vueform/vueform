const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  // =============== METHODS ==============

  /**
   * Handles `select` event.
   *
   * @param {object} option* the selected option object
   * @returns {void}
   * @private
   */
  const handleSelect = (option) => {
    fire('select', option)
  }

  /**
   * Handles `deselect` event.
   *
   * @param {object} option* the deselected option object
   * @returns {void}
   * @private
   */
  const handleDeselect = (option) => {
    fire('deselect', option)
  }

  /**
   * Handles `search-change` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  const handleSearchChange = (searchQuery) => {
    fire('search-change', searchQuery)
  }

  /**
   * Handles `open` event.
   *
   * @returns {void}
   * @private
   */
  const handleOpen = () => {
    fire('open')
  }

  /**
   * Handles `close` event.
   *
   * @returns {void}
   * @private
   */
  const handleClose = () => {
    fire('close')
  }

  /**
   * Handles `clear` event.
   *
   * @returns {void}
   * @private
   */
  const handleClear = () => {
    fire('clear')
  }

  /**
   * Handles `paste` event.
   * 
   * @param {Event} e event
   * @returns {void}
   * @private
   */
  const handlePaste = (e) => {
    fire('paste', e)
  }

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query
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
    handleClear,
    handlePaste,
    handleTag,
  }
}

export default base