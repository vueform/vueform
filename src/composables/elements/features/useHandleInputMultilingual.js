export default function useHandleInput(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const model = dependencies.model
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const changed = dependencies.changed
  const dirt = dependencies.dirt
  const validateLanguage = dependencies.validateLanguage
  const fire = dependencies.fire
  const language = dependencies.language


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleInput = (e) => {
    model.value = e.target.value

    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validateLanguage(language.value)
    }
  }

  return {
    handleInput,
  }
}