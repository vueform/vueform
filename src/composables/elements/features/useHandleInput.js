export default function useHandleInput(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const dirt = dependencies.dirt
  const model = dependencies.model
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const handleChange = dependencies.handleChange


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleInput = (e) => {
    model.value = e.target.value

    if (!_.isEqual(currentValue.value, previousValue.value)) {
      dirt()
      handleChange()
    }
  }

  return {
    handleInput,
  }
}