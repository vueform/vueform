import { toRefs } from 'composition-api'
import useValidation from './useValidation'
import asyncForEach from './../../../utils/asyncForEach'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const model = dependencies.model
  const value = dependencies.value

  const { 
    state, Validators, messageBag, rules, messages, dirty, validated,
    invalid, pending, debouncing, busy, errors, error, displayError,
    dirt, clean, resetValidators, initMessageBag, initValidation,
  } = useValidation(props, context, dependencies)

  // =============== METHODS ==============

  const validate = async () => {
    if (!schema.value.rules) {
      return
    }

    if (_.isArray(value.value)) {
      // going through each value of the slider
      // and validate them all for the same field
      await asyncForEach(model.value, async (modelValue) => {
        await asyncForEach(Validators.value, async (Validator) => {
          await Validator.validate(modelValue)
        })

        if (invalid.value) {
          return false
        }
      })
    }
    else {
      await asyncForEach(Validators.value, async (Validator) => {
        await Validator.validate(modelValue)
      })
    }

    state.value.validated = true
  }

  return {
    // Data
    state,
    Validators,
    messageBag,

    // Computed
    rules,
    messages,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    displayError,

    // Methods
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
  }
}