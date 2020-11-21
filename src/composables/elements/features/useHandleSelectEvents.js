export default function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fire = dependencies.fire

  // =============== METHODS ==============

  /**
   * Triggered when the user selects an option using non-native element.
   *
   * @public
   * @event select
   * @param {object} option the selected option object.
   */
  const handleSelect = (option) => {
    fire('select', option)
  }

  /**
   * Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.
   *
   * @public
   * @event remove
   * @param {object} option the deselected option object.
   */
  const handleDeselect = (option) => {
    fire('deselect', option)
  }

  /**
   * Triggered when the user changes the search criteria using non-native element.
   *
   * @public
   * @event searchChange
   * @param {string} searchQuery the current search query.
   */
  const handleSearchChange = (searchQuery) => {
    fire('searchChange', searchQuery)
  }

  /**
   * Triggered when the option list is opened using non-native element.
   *
   * @public
   * @event open
   */
  const handleOpen = () => {
    fire('open')
  }

  /**
   * Triggered when the option list is closed using non-native element.
   *
   * @public
   * @event close
   */
  const handleClose = () => {
    fire('close')
  }

  /**
   * Triggered when the user creates a tag using non-native element.
   *
   * @private
   * @event tag
   * @param {string} searchQuery the current search query.
   */
  const handleTag = (searchQuery) => {
    // unimplemented
  }


  // ============== WATCHERS ==============
  

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