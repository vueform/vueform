const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const add = dependencies.add
  const input = dependencies.input
  const isObject = dependencies.isObject
  const storeFileName = dependencies.storeFileName

  // ============== COMPUTED ==============

  // =============== METHODS ==============

  /**
   * 
   * 
   * @private
   */
  const handleChange = (e) => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return
    }

    _.each(e.target.files, (file) => {
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file)
    })
  }

  /**
   * 
   * 
   * @private
   */
  const handleClick = () => {
    if (isDisabled.value) {
      return
    }

    input.value.click()
  }

  return {
    handleChange,
    handleClick,
  }
}

export default base