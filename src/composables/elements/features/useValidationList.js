import computedOption from './../../../utils/computedOption'
import { computed, onMounted, toRefs, watch } from 'composition-api'
import useValidation from './useValidation'

export default function useChildrenValidation (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const { 
    // Data
    state,
    Validators,
    messageBag,

    //
    rules,
    messages,
    displayError,

    // Methods
    dirt,
    initValidation,
  } = useValidation(props, context, dependencies)

  const form$ = dependencies.form$
  const children$ = dependencies.children$
  const value = dependencies.value

  // ============== COMPUTED ==============

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(children$.value, { available: true, dirty: true })
      || state.value.dirty
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(children$.value, { available: true, validated: false })
      && state.value.validated
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(children$.value, { available: true, invalid: true })
      || _.some(Validators.value, { invalid: true })
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(children$.value, { available: true, pending: true })
      || _.some(Validators.value, { pending: true })
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(children$.value, { available: true, debouncing: true })
      || _.some(Validators.value, { debouncing: true })
  })

  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(children$.value, { available: true, busy: true })
      || pending.value || debouncing.value
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    const errorList = []

    _.each(validatorErrors.value, (error) => {
      errorList.push(error)
    })

    _.each(children$.value, (element$) => {
      if (!element$.available) {
        return
      }

      _.each(element$.errors, (error) => {
        errorList.push(error)
      })
    })

    return errorList
  })

  /**
   * List of errors collected from failing validator rules.
   * 
   * @type {array}
   * @ignore
   */
  const validatorErrors = computed(() => {
    const errorList = []

    _.each(Validators.value, (Validator) => {
      if (Validator.failing) {
        errorList.push(Validator.message)
      }
    })

    return errorList
  })

  /**
   * The element's error.
   * 
   * @type {string}
   */
  const error = computed(() => {
    return _.head(validatorErrors.value)
  })


  // =============== METHODS ==============

  /**
   * Validates the element.
   * 
   * @public
   * @returns {void}
   */
  const validate = () => {
    validateValidators()
    validateChildren()
  }
  
  /**
   * Validates the element.
   * 
   * @private
   * @returns {void}
   */
  const validateValidators = () => {
    _.each(Validators.value, (Validator) => {
      Validator.validate()
    })

    state.value.validated = true
  }
  
  /**
   * Validates each children.
   * 
   * @private
   * @returns {void}
   */
  const validateChildren = () => {
    _.each(children$.value, (element$) => {
      element$.validate()
    })
  }

  /**
   * Cleans the element.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    _.each(children$.value, (element$) => {
      element$.clean()
    })

    state.value.dirty = false
  }

  /**
   * Resets validators for children.
   * 
   * @public
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(children$.value, (element$) => {
      element$.resetValidators()
    })

    _.each(Validators.value, (Validator) => {
      Validator.reset()
    })

    state.value.validated = !schema.value.rules
  }

  /**
   * Initalizes messageBag service.
   * 
   * @private
   * @returns {void}
   */
  const initMessageBag = () => {
    messageBag.value = new form$.value.$laraform.services.messageBag(errors)
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
    validateValidators,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
  }
}