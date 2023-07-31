const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fire = dependencies.fire
  const el$ = dependencies.el$
  
  // =============== METHODS ==============
  
  /**
   * Handles `select` event.
   *
   * @param {object} option* the selected option object
   * @returns {void}
   * @private
   */
  const handleSelect = (option) => {
    fire('select', option, el$.value)
  }
  
  /**
   * Handles `deselect` event.
   *
   * @param {object} option* the deselected option object
   * @returns {void}
   * @private
   */
  const handleDeselect = (option) => {
    fire('deselect', option, el$.value)
  }
  
  /**
   * Handles `search-change` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  const handleSearchChange = (searchQuery) => {
    fire('search-change', searchQuery, el$.value)
  }
  
  /**
   * Handles `open` event.
   *
   * @returns {void}
   * @private
   */
  const handleOpen = () => {
    fire('open', el$.value)
  }
  
  /**
   * Handles `close` event.
   *
   * @returns {void}
   * @private
   */
  const handleClose = () => {
    fire('close', el$.value)
  }
  
  /**
   * Handles `clear` event.
   *
   * @returns {void}
   * @private
   */
  const handleClear = () => {
    fire('clear', el$.value)
  }
  
  /**
   * Handles `paste` event.
   *
   * @param {Event} e event
   * @returns {void}
   * @private
   */
  const handlePaste = (e) => {
    fire('paste', e, el$.value)
  }
  
  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  /* istanbul ignore next: unimplemented */
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