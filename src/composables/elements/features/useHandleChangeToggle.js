import useHandleChange from './useHandleChange'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const model = dependencies.model
  const { handleChange: baseHandleChange } = useHandleChange(props, context, dependencies)

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleChange = (val) => {
    model.value = val

    baseHandleChange()
  }

  return {
    handleChange,
  }
}