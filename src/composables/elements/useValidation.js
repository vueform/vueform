import some from 'lodash/some'
import each from 'lodash/each'
import head from 'lodash/head'
import isPlainObject from 'lodash/isPlainObject'
import concat from 'lodash/concat'
import isArray from 'lodash/isArray'
import { computed, reactive, toRefs, ref } from 'vue'
import asyncForEach from './../../utils/asyncForEach'

const base = function(props, context, dependencies)
{
  const {
    rules,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const path = dependencies.path
  
  // ================ DATA ================
  
  /**
   * Helper property used to store the element states.
   *
   * @type {object}
   * @default { dirty: false, validate: true }
   * @private
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
   * @private
   */
  const Validators = ref([])
  
  /**
   * Instance of MessageBag service. Custom errors and messages [can be added](/docs/validating-elements#custom-errors-and-messages).
   *
   * @type {MessageBag}
   * @default MessageBag
   */
  const messageBag = ref({})
  
  /**
   * Instance of ValidatorFactory.
   *
   * @type {ValidatorFactory}
   * @default ValidatorFactory
   * @private
   */
  const validatorFactory = reactive({})

  /**
   * Whether the element is currently being resetet (no validation should happen).
   *
   *
   * @type {boolean}
   * @default false
   * @private
   */
  const resetting = ref(false)
  
  // ============== COMPUTED ===============
  
  /**
   * The element's validation rules.
   *
   * @type {string|array}
   * @private
   */
  const validationRules = computed(() => {
    return rules.value
  })
  
  /**
   * Whether the element's value was modified.
   *
   * @type {boolean}
   */
  const dirty = computed(() => {
    return state.value.dirty
  })
  
  /**
   * Whether the element was already validated at least once.
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
    return some(Validators.value, { invalid: true })
  })
  
  /**
   * Whether the element has any async rules in progress.
   *
   * @type {boolean}
   */
  const pending = computed(() => {
    return some(Validators.value, { pending: true })
  })
  
  /**
   * Whether the element is `pending`.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value
  })
  
  /**
   * The list of errors of failing rules.
   *
   * @type {array}
   * @private
   */
  const validatorErrors = computed(() => {
    let errs = []
    
    each(Validators.value, (Validator) => {
      if (Validator.failing) {
        errs.push(Validator.message)
      }
    })
    
    return errs
  })
  
  /**
   * All the errors of `MessageBag`.
   *
   * @type {array}
   */
  const errors = computed(() => {
    return messageBag.value.errors
  })
  
  /**
   * The first error of `MessageBag`.
   *
   * @type {string}
   */
  const error = computed(() => {
    return messageBag.value.error || null
  })
  
  /**
   * Whether the element has errors.
   *
   * @type {boolean}
   */
  const isDanger = computed(() => {
    return error.value !== null
  })
  
  /**
   * Whether the element has been filled in successfully.
   *
   * @type {boolean}
   */
  const isSuccess = computed(() => {
    return (validationRules.value && validationRules.value.length > 0 && state.value.validated && !invalid.value) ||
      ((!validationRules.value || !validationRules.value.length) && dirty.value)
  })
  
  // =============== METHODS ===============
  
  /**
   * Checks each validation rule for the element (async).
   *
   * @returns {Promise}
   */
  const validate = async () => {
    if (!validationRules.value) {
      return
    }
    
    if (form$.value.validation === false) {
      return
    }
    
    if (resetting.value) {
      resetting.value = false
      return
    }
    
    await asyncForEach(Validators.value, async (Validator) => {
      await Validator.validate()
    })
    
    state.value.validated = true
  }
  
  /**
   * Sets the validators to default state.
   *
   * @returns {void}
   */
  const resetValidators = () => {
    each(Validators.value, (Validator) => {
      Validator.reset()
    })
    
    state.value.validated = !validationRules.value
  }
  
  /**
   * Flag the element as dirty.
   *
   * @returns {void}
   * @private
   */
  const dirt = () => {
    state.value.dirty = true
  }
  
  /**
   * Removes the element's `dirty` state.
   *
   * @returns {void}
   */
  const clean = () => {
    state.value.dirty = false
  }
  
  /**
   * Clears the manually added messages from the [`messageBag`](#property-message-bag).
   *
   * @returns {void}
   */
  const clearMessages = () => {
    /* istanbul ignore else */
    if (messageBag.value) {
      messageBag.value.clear()
    }
  }
  
  /**
   * Initializes MessageBag service.
   *
   * @returns {void}
   * @private
   */
  const initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors)
  }
  
  /**
   * Initializes validators.
   *
   * @returns {void}
   * @private
   */
  const initValidation = () => {
    /* istanbul ignore else */
    if (!validationRules.value) {
      return
    }
    
    // If the element has rules it does not
    // qualify as validated by default
    state.value.validated = false
    
    validatorFactory.value = new form$.value.$vueform.services.validation.factory(path.value, form$.value)
    
    Validators.value = []
    
    each(validatorFactory.value.makeAll(validationRules.value), (Validator) => {
      Validators.value.push(Validator)
    })
  }
  
  /**
   * Re-initializes validators when rules have changed.
   *
   * @returns {void}
   */
  const reinitValidation = () => {
    initValidation()
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const text = function(props, context, dependencies)
{
  const {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ===============
  
  /**
   * Whether the element has a validation rule with pending debounce.
   *
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return some(Validators.value, { debouncing: true })
  })
  
  /**
   * Whether the element is `pending` or `debouncing`.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || debouncing.value
  })
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const list = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const {
    state,
    Validators,
    messageBag,
    validationRules,
    dirt,
    initValidation,
    resetting,
  } = base(props, context, dependencies)
  
  const form$ = dependencies.form$
  const children$ = dependencies.children$
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element's or any of its children's value was modified.
   *
   * @type {boolean}
   */
  const dirty = computed(() => {
    return some(children$.value, { available: true, dirty: true })
      || state.value.dirty
  })
  
  /**
   * Whether the element and all of its children was already validated at least once.
   *
   * @type {boolean}
   */
  const validated = computed(() => {
    return !some(children$.value, { available: true, validated: false })
      && state.value.validated
  })
  
  /**
   * Whether the element or any of its children has any failing rules.
   *
   * @type {boolean}
   */
  const invalid = computed(() => {
    return some(children$.value, { available: true, invalid: true })
      || some(Validators.value, { invalid: true })
  })
  
  /**
   * Whether the element or any of its children has any async rules in progress.
   *
   * @type {boolean}
   */
  const pending = computed(() => {
    return some(children$.value, { available: true, pending: true })
      || some(Validators.value, { pending: true })
  })
  
  /**
   * Whether the element or any of its children have a validation rule with pending debounce.
   *
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return some(children$.value, { available: true, debouncing: true })
      || some(Validators.value, { debouncing: true })
  })
  
  /**
   * Whether the element or any of its children is `pending` or `debouncing`.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return some(children$.value, { available: true, busy: true })
      || pending.value || debouncing.value
  })
  
  const validatorErrors = computed(() => {
    const validatorErrors = []
    
    each(Validators.value, (Validator) => {
      if (Validator.failing) {
        validatorErrors.push(Validator.message)
      }
    })
    
    return validatorErrors
  })
  
  /**
   * The list of errors collected from children.
   *
   * @type {array}
   * @private
   */
  const childrenErrors = computed(() => {
    const childrenErrors = []
    
    each(children$.value, (element$) => {
      if (!element$.available || element$.isStatic) {
        return
      }
      
      each(element$.errors, (error) => {
        childrenErrors.push(error)
      })
    })
    
    return childrenErrors
  })
  
  /**
   * The `validatorErrors` concatenated with `childrenErrors`.
   *
   * @type {array}
   * @private
   */
  const baseErrors = computed(() => {
    return validatorErrors.value.concat(childrenErrors.value)
  })
  
  const errors = computed(() => {
    return messageBag.value.errors
  })
  
  const error = computed(() => {
    return head(validatorErrors.value)
  })
  
  // =============== METHODS ==============
  
  /**
   * Checks each validation rule for the element and validates children (async).
   *
   * @returns {Promise}
   */
  const validate = async () => {
    if (resetting.value) {
      resetting.value = false
      return
    }

    await validateValidators()
    await validateChildren()
  }
  
  /**
   * Checks each validation rule for the element (async).
   *
   * @returns {Promise}
   */
  const validateValidators = async () => {
    if (form$.value.validation === false) {
      return
    }
    
    await asyncForEach(Validators.value, async (Validator) => {
      await Validator.validate()
    })
    
    state.value.validated = true
  }
  
  /**
   * Validates every child (async).
   *
   * @returns {Promise}
   */
  const validateChildren = async () => {
    if (form$.value.validation === false) {
      return
    }
    
    await asyncForEach(children$.value, async (element$) => {
      /* istanbul ignore else */
      if (!element$.isStatic) {
        await element$.validate()
      }
    })
  }
  
  const clean = () => {
    each(children$.value, (element$) => {
      /* istanbul ignore next: checked for console errors, but return can not be checked */
      if (element$.isStatic) {
        return
      }
      
      element$.clean()
    })
    
    state.value.dirty = false
  }
  
  const clearMessages = () => {
    /* istanbul ignore else */
    if (messageBag.value) {
      messageBag.value.clear()
    }
    
    each(children$.value, (element$) => {
      /* istanbul ignore else */
      if (element$.isStatic) {
        return
      }
      
      element$.clearMessages()
    })
  }
  
  const resetValidators = () => {
    each(children$.value, (element$) => {
      /* istanbul ignore next: checked for console errors, but return can not be checked */
      if (element$.isStatic) {
        return
      }
      
      element$.resetValidators()
    })
    
    each(Validators.value, (Validator) => {
      Validator.reset()
    })
    
    state.value.validated = !validationRules.value
  }
  
  const initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(baseErrors)
  }
  
  const reinitValidation = () => {
    initValidation()
    
    each(children$.value, (element$) => {
      /* istanbul ignore next: checked for console errors, but return can not be checked */
      if (element$.isStatic) {
        return
      }
      
      element$.reinitValidation()
    })
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    validatorErrors,
    childrenErrors,
    errors,
    error,
    validationRules,
    validate,
    validateValidators,
    validateChildren,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    rules,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const path = dependencies.path
  const languages = dependencies.languages
  const language = dependencies.language
  const value = dependencies.value
  
  const {
    messageBag,
    clearMessages,
    resetting,
  } = text(props, context, dependencies)
  
  // ================ DATA ================
  
  const state = ref({
    dirty: {},
    validated: {},
  })
  
  const Validators = ref({})
  
  // ============== COMPUTED ===============
  
  const validationRules = computed(() => {
    var ruleList = {}
    
    if (!rules.value) {
      return ruleList
    }
    
    each(languages.value, (lang) => {
      ruleList[lang] = isPlainObject(rules.value)
        ? (rules.value[lang] || null)
        : rules.value
    })
    
    return ruleList
  })
  
  /**
   * Whether the element's value has been modified in any language.
   *
   * @type {boolean}
   */
  const dirty = computed(() => {
    return some(state.value.dirty, (val) => {
      return val === true
    })
  })
  
  /**
   * Whether all the languages have already been validated at least once.
   *
   * @type {boolean}
   */
  const validated = computed(() => {
    return !some(state.value.validated, (val) => {
      return val === false
    })
  })
  
  /**
   * Whether the element has failing rules in any language.
   *
   * @type {boolean}
   */
  const invalid = computed(() => {
    var invalid = false
    
    each(Validators.value, (Validators) => {
      if (some(Validators, { invalid: true })) {
        invalid = true
      }
    })
    
    return invalid
  })
  
  /**
   * Whether the element has any async rules in progress in any language.
   *
   * @type {boolean}
   */
  const pending = computed(() => {
    var pending = false
    
    each(Validators.value, (Validators) => {
      if (some(Validators, { pending: true })) {
        pending = true
      }
    })
    
    return pending
  })
  
  /**
   * Whether the element has a validation rule with pending debounce in any language.
   *
   * @type {boolean}
   */
  const debouncing = computed(() => {
    var debouncing = false
    
    each(Validators.value, (Validators) => {
      if (some(Validators, { debouncing: true })) {
        debouncing = true
      }
    })
    
    return debouncing
  })
  
  /**
   * Whether the element is `pending` or `debouncing` in any language.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || debouncing.value
  })
  
  const validatorErrors = computed(() => {
    var errors = []
    
    each(Validators.value, (Validators, language) => {
      each(Validators, (Validator) => {
        if (Validator.failing) {
          errors.push(Validator.message + ' (' + language + ')')
        }
      })
    })
    
    return errors
  })
  
  const errors = computed(() => {
    return messageBag.value.errors
  })
  
  const error = computed(() => {
    var error = null
    
    each(Validators.value[language.value], (Validator) => {
      if (error !== null) {
        return false
      }
      
      if (Validator.failing) {
        error = Validator.message
      }
    })
    
    let errors = messageBag.value.prepends ? messageBag.value.prepends.errors : []
    
    if (error !== null) {
      errors = concat(errors, [error])
    }
    
    errors = concat(errors, messageBag.value.appends ? messageBag.value.appends.errors : [])
    
    return head(errors)
  })
  
  /**
   * Whether the field has errors.
   *
   * @type {boolean}
   */
  const isDanger = computed(() => {
    return error.value !== null && error.value !== undefined
  })
  
  /**
   * Whether the field has been filled in successfully.
   *
   * @type {boolean}
   */
  const isSuccess = computed(() => {
    return (validationRules.value[language.value] && validationRules.value[language.value].length > 0 && state.value.validated[language.value] && !some(Validators.value[language.value], { invalid: true })) ||
      ((!validationRules.value[language.value] || !validationRules.value[language.value].length) && state.value.dirty[language.value])
  })
  
  // =============== METHODS ===============
  
  /**
   * Checks each validation rule for the element in every language (async).
   *
   * @returns {Promise}
   */
  const validate = async () => {
    if (resetting.value) {
      resetting.value = false
      return
    }

    await asyncForEach(languages.value, async (lang) => {
      await validateLanguage(lang)
    })
  }
  
  /**
   * Checks each validation rule for the element in a specific language (async).
   *
   * @param {string} lang the language to check (defaults to currently selected language)
   * @returns {Promise}
   */
  const validateLanguage = async (lang = language.value) => {
    if (form$.value.validation === false) {
      return
    }
    
    if (!Validators.value[lang]) {
      return
    }
    
    await asyncForEach(Validators.value[lang], async (Validator) => {
      await Validator.validate(value.value[lang])
    })
    
    state.value.validated[lang] = true
  }
  
  const resetValidators = () => {
    each(languages.value, (lang) => {
      each(Validators.value[lang], (Validator) => {
        Validator.reset()
      })
      
      each(validationRules.value, (r, lang) => {
        state.value.validated[lang] = r.length > 0 ? false : true // @todo:adam missing null check
      })
    })
  }
  
  const dirt = () => {
    state.value.dirty[language.value] = true
  }
  
  const clean = () => {
    state.value.dirty[language.value] = false
  }
  
  /**
   * Inits the default `state` object.
   *
   * @returns {void}
   * @private
   */
  const initState = () => {
    var dirty = {}
    var validated = {}
    
    each(languages.value, (lang) => {
      dirty[lang] = false
    })
    
    each(languages.value, (lang) => {
      validated[lang] = true
    })
    
    state.value = {
      dirty,
      validated,
    }
  }
  
  const initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors)
  }
  
  const initValidation = () => {
    /* istanbul ignore next: can not be null or false */
    if (!validationRules.value) {
      return
    }
    
    // If the element has rules it does not
    // qualify as validated by default
    each(validationRules.value, (r, lang) => {
      state.value.validated[lang] = r !== null && r.length > 0 ? false : true
    })
    
    var factory = new form$.value.$vueform.services.validation.factory(path.value, form$.value)
    
    Validators.value = {}
    
    each(validationRules.value, (languageRules, lang) => {
      if (languageRules === null) {
        return
      }
      
      /* istanbul ignore else */
      if (!Validators.value[lang]) {
        Validators.value = Object.assign({}, Validators.value, {
          [lang]: [],
        })
      }
      
      each(factory.makeAll(languageRules), (Validator) => {
        Validators.value[lang].push(Validator)
      })
    })
  }
  
  const reinitValidation = () => {
    initValidation()
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    validateLanguage,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initState,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const slider = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const value = dependencies.value
  
  const {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  } = base(props, context, dependencies)
  
  // =============== METHODS ==============
  
  const validate = async () => {
    if (!validationRules.value) {
      return
    }
    
    if (resetting.value) {
      resetting.value = false
      return
    }
    
    if (isArray(value.value)) {
      // going through each value of the slider
      // and validate them all for the same field
      await asyncForEach(value.value, async (val) => {
        await asyncForEach(Validators.value, async (Validator) => {
          await Validator.validate(val)
        })
        
        if (invalid.value) {
          return false
        }
      })
    } else {
      await asyncForEach(Validators.value, async (Validator) => {
        await Validator.validate(value.value)
      })
    }
    
    state.value.validated = true
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const file = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const value = dependencies.value
  const uploading = dependencies.uploading
  const removing = dependencies.removing
  
  const {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element is `pending`, `debouncing`, `uploading` or `removing`.
   *
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || uploading.value || removing.value
  })
  
  // =============== METHODS ==============
  
  /**
   * Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.
   *
   * @returns {Promise}
   */
  const validate = async () => {
    if (!validationRules.value) {
      return
    }
    
    if (form$.value.validation === false) {
      return
    }
    
    if (resetting.value) {
      resetting.value = false
      return
    }
    
    let restricted = [
      'min', 'max', 'between', 'size', 'mimetypes', 'mimes',
      'dimensions', 'file', 'image', 'gt', 'gte', 'lt', 'lte',
    ]
    
    await asyncForEach(Validators.value, async (Validator) => {
      if (!(value.value instanceof File) && !!value.value && restricted.indexOf(Validator.name) !== -1) {
        return
      }
      
      await Validator.validate()
    })
    
    state.value.validated = true
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const location = function(props, context, dependencies)
{
  const {
    displayKey,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const value = dependencies.value
  
  const {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isSuccess,
    isDanger,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  } = text(props, context, dependencies)
  
  // =============== METHODS ==============
  
  /**
   * Checks each validation rule for the element on [`displayKey`](#option-display-key) property of the location object (async).
   *
   * @returns {Promise}
   */
  const validate = async () => {
    if (!validationRules.value) {
      return
    }
    
    if (form$.value.validation === false) {
      return
    }
    
    if (resetting.value) {
      resetting.value = false
      return
    }
    
    await asyncForEach(Validators.value, async (Validator) => {
      await Validator.validate(value.value[displayKey.value])
    })
    
    state.value.validated = true
  }
  
  return {
    state,
    Validators,
    messageBag,
    resetting,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isSuccess,
    isDanger,
    validate,
    dirt,
    clean,
    clearMessages,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation,
  }
}

const group = list
const object = list

export {
  list,
  multilingual,
  object,
  group,
  slider,
  file,
  location,
  text,
}

export default base