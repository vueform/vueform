const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const changed = dependencies.changed
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const fire = dependencies.fire

  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @returns {void}
   * @private
   */
  const handleChange = () => {
    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
  }

  return {
    handleChange,
  }
}

const checkbox = function(props, context, dependencies)
{
  const {
    handleChange: baseHandleChange
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const model = dependencies.model

  // =============== METHODS ==============

  const handleChange = (e) => {
    model.value = e.target.checked

    baseHandleChange()
  }

  return {
    handleChange,
  }
}

const toggle = function(props, context, dependencies)
{
  const {
    handleChange: baseHandleChange
  } = base(props, context, dependencies)

  // ============ DEPENDENCIES ============

  const model = dependencies.model

  // =============== METHODS ==============

  const handleChange = (val) => {
    model.value = val

    baseHandleChange()
  }

  return {
    handleChange,
  }
}

const date = toggle
const dates = date
const radio = checkbox

export {
  checkbox,
  date,
  dates,
  radio,
  toggle,
} 

export default base