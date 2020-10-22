export default function useHandleChange(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const validate = dependencies.validate
  const fireChange = dependencies.fireChange


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleChange = () => {
    fireChange()

    if (form$.value.$_shouldValidateOn('change')) {
      validate()
    }
  }

  return {
    handleChange,
  }
}