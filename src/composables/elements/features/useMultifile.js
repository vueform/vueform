export default function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const disabled = dependencies.disabled
  const add = dependencies.add
  const input = dependencies.input

  // =============== METHODS ==============

  /**
   * Triggered when a file is selected by the user.
   *
   * @private
   * @returns {void}
   */
  const handleChange = (e) => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || disabled.value) {
      return
    }

    _.each(e.target.files, (file) => {
      add(file)
    })

    input.value = ''
  }

  /**
   * Triggered when an uploader is clicked.
   *
   * @private
   * @returns {void}
   */
  const handleClick = () => {
    if (disabled.value) {
      return
    }

    input.value.click()
  }

  return {
    handleChange,
    handleClick,
  }
}