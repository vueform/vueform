export default function useHandleKeyup(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const readonly = dependencies.readonly
  const handleChange = dependencies.handleChange


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleKeyup = () => {
    if (readonly.value === true) {
      return
    }

    handleChange()
  }

  return {
    handleKeyup,
  }
}