import { computed, reactive, onMounted, watch, toRefs, ref, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import asyncForEach from './../../../utils/asyncForEach'

export default function useData(props, context, dependencies)
{
  const { schema } = toRefs(props)

   // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const value = dependencies.value
  const path = dependencies.path

  // ================ DATA ================

  /**
   * Helper property used to store the element states.
   * 
   * @private
   * @type {object}
   * @default {}
   */
  const state = ref({
    dirty: false,
    validated: true,
  })

  /**
   * An array containing all the validators of the element.
   * 
   * @type {array}
   * @default []
   */
  const Validators = ref([])

  /**
   * Message bag service.
   * 
   * @type {MessageBag}
   * @default {MessageBag}
   */
  const messageBag = ref({})

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
   * Whether the element should display it's first error, if any.
   * 
   * @type {boolean} 
   * @default true
   */
  const displayError = computed(computedOption('displayError', schema, true))

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return state.value.dirty
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return state.value.validated
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(Validators.value, { invalid: true })
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(Validators.value, { pending: true })
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(Validators.value, { debouncing: true })
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

    _.each(Validators.value, (Validator) => {
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
    return messageBag.value.error || null
  })

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

    if (form$.value.validation === false) {
      return
    }

    await asyncForEach(Validators.value, async (Validator) => {
      await Validator.validate()
    })
    
    state.value.validated = true
  }

  /**
   * Set the validated state to false.
   * 
   * @public
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(Validators.value, (Validator) => {
      Validator.reset()
    })

    state.value.validated = !schema.value.rules
  }

  /**
   * Flag the element as dirty.
   * 
   * @public
   * @returns {void}
   */
  const dirt = () => {
    state.value.dirty = true
  }

  /**
   * Flag the element as non dirty.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    state.value.dirty = false
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

  /**
   * Initalizes validators.
   * 
   * @private
   * @returns {void}
   */
  const initValidation = () => {
    if (!rules.value) {
      return
    }

    // If the element has rules it does not
    // qualify as validated by default
    state.value.validated = false

    validatorFactory.value = new form$.value.$laraform.services.validation.factory(path.value, form$.value)

    _.each(validatorFactory.value.makeAll(rules.value), (Validator) => {
      Validators.value.push(Validator)
    })
  }

  // =============== HOOKS ================

  onMounted(() => {
    watch(value, () => {
      dirt()
    }, { deep: false })

    initMessageBag()
    initValidation()
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