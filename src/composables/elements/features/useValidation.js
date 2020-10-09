import computedOption from './../../../utils/computedOption'
import asyncForEach from './../../../utils/asyncForEach'
import { computed, reactive, onMounted, watch, toRefs } from 'composition-api'

export default function useData(props, context, dependencies)
{
  const { schema } = toRefs(props)

   // ============ DEPENDENCIES ============

  const { form$ } = dependencies.form$
  const { value } = dependencies.value

  // ================ DATA ================

  /**
   * Helper property used to store the element states.
   * 
   * @private
   * @type {object}
   * @default {}
   */
  const state = reactive({
    dirty: false,
    validated: true,
  })

  /**
   * An array containing all the validators of the element.
   * 
   * @type {array}
   * @default []
   */
  const Validators = reactive([])

  /**
   * Message bag service.
   * 
   * @type {MessageBag}
   * @default {MessageBag}
   */
  const messageBag = reactive({})

  /**
   * Validator factory service.
   * 
   * @type {ValidatorFactory}
   * @default {ValidatorFactory}
   */
  const validatorFactory = reactive({})

  // ============== COMPUTED ===============

  /**
   * Returns element rules
   * 
   * @type {array|string|object}
   * @ignore
   */
  const rules = computed(computedOption('rules', schema))

  /**
   * Overrides default validation rule [messages](validation#custom-messages).
   * 
   * @type {object} 
   * @default null
   */
  const messages = computed(computedOption('messages', schema, {}))

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return state.dirty
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return state.validated
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(Validators, { invalid: true })
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(Validators, { pending: true })
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(Validators, { debouncing: true })
  })

  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || debouncing.value
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    let errs = []

    _.each(Validators, (Validator) => {
      if (Validator.invalid) {
        errs.push(Validator.message)
      }
    })

    return errs
  })

  /**
   * The first error that should be displayed under the element.
   * 
   * @type {string}
   */
  const error = computed(() => {
    return messageBag.value ? messageBag.value.error : null
  })

  /**
   * Whether the element should display it's first error, if any.
   * 
   * @type {boolean} 
   * @default true
   */
  const displayError = computed(computedOption('error', schema, true))

  // =============== METHODS ===============

  /**
   * 
   * Validates the element.
   * 
   * @public
   * @returns {void}
   */
  const validate = async () => {
    if (!rules.value) {
      return
    }

    if (form$.validation === false) {
      return
    }

    if (!schema.rules) {
      return
    }

    await asyncForEach(Validators, async (Validator) => {
      await Validator.validate()
    })
    
    state.validated = true
  }

  /**
   * Flag the element as dirty.
   * 
   * @public
   * @returns {void}
   */
  const dirt = () => {
    state.dirty = true
  }

  /**
   * Flag the element as non dirty.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    state.dirty = false
  }

  /**
   * Set the validated state to false.
   * 
   * @public
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(Validators, (Validator) => {
      Validator.reset()
    })

    state.validated = !schema.rules
  }

  /**
   * Initalizes messageBag service.
   * 
   * @private
   * @returns {void}
   */
  const initMessageBag = (el$) => {
    messageBag.value = new form$.$laraform.services.messageBag(el$)
  }

  /**
   * Initalizes validators.
   * 
   * @private
   * @returns {void}
   */
  const initValidation = (el$) => {
    if (!rules.value) {
      return
    }

    // If the element has rules it does not
    // qualify as validated by default
    state.validated = false

    validatorFactory.value = new form$.$laraform.services.validation.factory(el$)

    _.each(validatorFactory.value.makeAll(rules.value), (Validator) => {
      Validators.push(Validator)
    })
  }

  // =============== HOOKS ================

  onMounted(() => {
    watch(value, () => {
      dirt()
    }, { deep: true })
  })

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