export default function useHandleChangeList(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const validateValidators = dependencies.validateValidators
  const fireChange = dependencies.fireChange


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleChange = (newValue = value.value, oldValue) => {
     if (!oldValue) {
      var oldValue = value.value
    }

    nextTick(() => {
      fireChange(newValue, oldValue)

      if (form$.value.shouldValidateOnChange) {
        // nextTick is required because the `value`
        // comes from children$ which only refreshes
        // once DOM is reloaded
        nextTick(() => {
          validateValidators()
        })
      }
    })

    dirt()
  }

  return {
    handleChange,
  }
}