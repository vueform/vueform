import useHandleChange from './useHandleChange'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const model = dependencies.model

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   */
  const handleInput = (e) => {
    model.value = e.target.value
  }

  return {
    handleInput,
  }
}

export default base