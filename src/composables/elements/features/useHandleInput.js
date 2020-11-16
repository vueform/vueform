import useHandleChange from "./useHandleChange"

export default function useHandleInput(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { handleChange } = useHandleChange(props, context, dependencies)


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleInput = handleChange

  return {
    handleInput,
  }
}