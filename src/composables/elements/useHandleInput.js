import useHandleChange from './useHandleChange'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   */
  const handleInput = (e) => {
    value.value = e.target.value
  }

  return {
    handleInput,
  }
}

const select = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const model = dependencies.model
  const {
    handleChange
  } = useHandleChange(props, context, dependencies)

  // =============== METHODS ==============

  const handleInput = (val) => {
    model.value = val

    handleChange()
  }

  return {
    handleInput,
  }
}

export {
  select,
}

export default base