import _ from 'lodash'
import { computed, reactive, toRefs, ref, } from 'composition-api'
import asyncForEach from './../../utils/asyncForEach'

const base = function(props, context, dependencies)
{
  const {
    rules
  } = toRefs(props)

   // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path

  // ============== COMPUTED ==============

  const validationRules = computed(() => {
    return rules.value
  })

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

  const validatorErrors = computed(() => {
    let errs = []

    _.each(Validators.value, (Validator) => {
      if (Validator.failing) {
        errs.push(Validator.message)
      }
    })

    return errs
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    return messageBag.value.errors
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
   * @returns {void}
   */
  const validate = async () => {
    if (!validationRules.value) {
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
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(Validators.value, (Validator) => {
      Validator.reset()
    })

    state.value.validated = !validationRules.value
  }

  /**
   * Flag the element as dirty.
   * 
   * @returns {void}
   */
  const dirt = () => {
    state.value.dirty = true
  }

  /**
   * Flag the element as non dirty.
   * 
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
    messageBag.value = new form$.value.$laraform.services.messageBag(validatorErrors)
  }

  /**
   * Initalizes validators.
   * 
   * @private
   * @returns {void}
   */
  const initValidation = () => {
    if (!validationRules.value) {
      return
    }

    // If the element has rules it does not
    // qualify as validated by default
    state.value.validated = false

    validatorFactory.value = new form$.value.$laraform.services.validation.factory(path.value, form$.value)

    Validators.value = []

    _.each(validatorFactory.value.makeAll(validationRules.value), (Validator) => {
      Validators.value.push(Validator)
    })
  }

  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
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
  } = base(props, context, dependencies)

  const form$ = dependencies.form$
  const children$ = dependencies.children$

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
   * 
   * 
   * @private
   */
  const validatorErrors = computed(() => {
    const validatorErrors = []

    _.each(Validators.value, (Validator) => {
      if (Validator.failing) {
        validatorErrors.push(Validator.message)
      }
    })

    return validatorErrors
  })

  /**
   * 
   * 
   * @private
   */
  const childrenErrors = computed(() => {
    const childrenErrors = []

    _.each(children$.value, (element$) => {
      if (!element$.available || element$.isStatic) {
        return
      }

      _.each(element$.errors, (error) => {
        childrenErrors.push(error)
      })
    })

    return childrenErrors
  })

  /**
   * 
   * 
   * @private
   */
  const baseErrors = computed(() => {
    return validatorErrors.value.concat(childrenErrors.value)
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    return messageBag.value.errors
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
    if (form$.value.validation === false) {
      return
    }

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
    if (form$.value.validation === false) {
      return
    }

    _.each(children$.value, (element$) => {
      element$.validate()
    })
  }

  /**
   * Cleans the element.
   * 
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
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }

      element$.resetValidators()
    })

    _.each(Validators.value, (Validator) => {
      Validator.reset()
    })

    state.value.validated = !validationRules.value
  }

  /**
   * Initalizes messageBag service.
   * 
   * @private
   * @returns {void}
   */
  const initMessageBag = () => {
    messageBag.value = new form$.value.$laraform.services.messageBag(baseErrors)
  }

  return {
    state,
    Validators,
    messageBag,
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
    resetValidators,
    initMessageBag,
    initValidation,
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
  } = base(props, context, dependencies)

  // ================ DATA ================

  /**
   * 
   * 
   * @private
   */
  const state = ref({
    dirty: {},
    validated: {},
  })

  /**
   * 
   * 
   * @private
   */
  const Validators = ref({})

  // ============== COMPUTED ===============
  
  /**
   * 
   * 
   * @private
   */
  const validationRules = computed(() => {
    var ruleList = {}

    if (!rules.value) {
      return ruleList
    }

    _.each(languages.value, (lang) => {
      ruleList[lang] = _.isPlainObject(rules.value)
        ? (rules.value[lang] || null)
        : rules.value
    })

    return ruleList
  })

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(state.value.dirty, (val) => {
      return val === true
    })
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(state.value.validated, (val) => {
      return val === false
    })
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    var invalid = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { invalid: true })) {
        invalid = true
      }
    })

    return invalid
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    var pending = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { pending: true })) {
        pending = true
      }
    })

    return pending
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    var debouncing = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { debouncing: true })) {
        debouncing = true
      }
    })

    return debouncing
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
   * 
   * 
   * @private
   */
  const validatorErrors = computed(() => {
    var errors = []

    _.each(Validators.value, (Validators, language) => {
      _.each(Validators, (Validator) => {
        if (Validator.failing) {
          errors.push(Validator.message + ' (' + language + ')')
        }
      })
    })

    return errors
  })

  /**
   * 
   * 
   * @private
   */
  const errors = computed(() => {
    return messageBag.value.errors
  })

  /**
   * 
   * 
   * @private
   */
  const error = computed(() => {
    var error = null

    _.each(Validators.value[language.value], (Validator) => {
      if (error !== null) {
        return false
      }

      if (Validator.failing) {
        error = Validator.message
      }
    })

    let errors = messageBag.value.prepends ? messageBag.value.prepends.errors : []

    if (error !== null) {
      errors = _.concat(errors, [error])
    }

    errors = _.concat(errors, messageBag.value.appends ? messageBag.value.appends.errors : [])

    return _.head(errors)
  })

  // =============== METHODS ===============

  /**
   * 
   * Validates the element.
   * 
   * @returns {void}
   */
  const validate = async () => {
    _.each(languages.value, (language) => {
      validateLanguage(language)
    })
  }

  /**
   * 
   * 
   * @private
   */
  const validateLanguage = (lang = language.value) => {
    if (form$.value.validation === false) {
      return
    }

    if (!validationRules.value) {
      return
    }

    _.each(Validators.value[lang], (Validator) => {
      Validator.validate(value.value[lang])
    })

    state.value.validated[lang] = true
  }

  /**
   * Set the validated state to false.
   * 
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(languages.value, (language) => {
      _.each(Validators.value[language], (Validator) => {
        Validator.reset()
      })

      _.each(validationRules.value, (r, language) => {
        state.value.validated[language] = r.length > 0 ? false : true
      })
    })
  }

  /**
   * Flag the element as dirty.
   * 
   * @returns {void}
   */
  const dirt = () => {
    state.value.dirty[language.value] = true
  }

  /**
   * Flag the element as non dirty.
   * 
   * @returns {void}
   */
  const clean = () => {
    state.value.dirty[language.value] = false
  }

  /**
   * 
   * 
   * @private
   */
  const initState = () => {
    var dirty = {}
    var validated = {}

    _.each(languages.value, (language) => {
      dirty[language] = false
    })

    _.each(languages.value, (language) => {
      validated[language] = true
    })

    state.value = {
      dirty,
      validated,
    }
  }

  /**
   * 
   * 
   * @private
   */
  const initMessageBag = () => {
    messageBag.value = new form$.value.$laraform.services.messageBag(validatorErrors)
  }

  /**
   * Initalizes validators.
   * 
   * @private
   * @returns {void}
   */
  const initValidation = () => {
    if (!validationRules.value) {
      return  
    }

    // If the element has rules it does not
    // qualify as validated by default
    _.each(validationRules.value, (r, lang) => {
      state.value.validated[lang] = r !== null && r.length > 0 ? false : true
    })

    var factory = new form$.value.$laraform.services.validation.factory(path.value, form$.value)

    Validators.value = {}

    _.each(validationRules.value, (languageRules, lang) => {
      if (languageRules === null) {
        return
      }

      if (!Validators.value[lang]) {
        Validators.value = Object.assign({}, Validators.value, {
          [lang]: []
        })
      }

      _.each(factory.makeAll(languageRules), (Validator) => {
        Validators.value[lang].push(Validator)
      })
    }) 
  }

  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    validate,
    validateLanguage,
    dirt,
    clean,
    resetValidators,
    initState,
    initMessageBag,
    initValidation,
  }
}

const object = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { 
    messageBag,
  } = base(props, context, dependencies)

  const children$ = dependencies.children$
  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(children$.value, { available: true, dirty: true })
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(children$.value, { available: true, validated: false })
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(children$.value, { available: true, invalid: true })
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(children$.value, { available: true, pending: true })
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(children$.value, { available: true, debouncing: true })
  })

  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(children$.value, { available: true, busy: true })
  })

  /**
   * 
   * 
   * @private
   */
  const childrenErrors = computed(() => {
    var errors = []

    _.each(children$.value, (element$) => {
      if (!element$.available || element$.isStatic) {
        return
      }

      _.each(element$.errors, (error) => {
        errors.push(error)
      })
    })

    return errors
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    return messageBag.value.errors
  })


  // =============== METHODS ==============

  /**
   * Validates the element.
   * 
   * @returns {void}
   */
  const validate = () => {
    _.each(children$.value, (element$) => {
      if (!element$.available || element$.isStatic) {
        return
      }

      element$.validate()
    })
  }

  /**
   * Cleans the element.
   * 
   * @returns {void}
   */
  const clean = () => {
    _.each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }

      element$.clean()
    })
  }

  /**
   * Resets validators for children.
   * 
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      element$.resetValidators()
    })
  }
  
  /**
   * 
   * 
   * @private
   */
  const initMessageBag = (el$) => {
    messageBag.value = new form$.value.$laraform.services.messageBag(childrenErrors)
  }

  return {
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    validate,
    clean,
    resetValidators,
    initMessageBag,
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
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
  } = base(props, context, dependencies)

  // =============== METHODS ==============

  /**
   * 
   * 
   * @private
   */
  const validate = async () => {
    if (!validationRules.value) {
      return
    }

    if (_.isArray(value.value)) {
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
    }
    else {
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
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
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
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
  } = base(props, context, dependencies)

  // ============== COMPUTED ==============

  /**
   * Whether the element is `pending`, `debouncing` or `uploading`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || debouncing.value || uploading.value || removing.value
  })

  // =============== METHODS ==============

  /**
   * Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded.
   * 
   * @returns {void}
   */
  const validate = async () => {
    if (!validationRules.value) {
      return
    }

    if (form$.value.validation === false) {
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
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
  }
}

const group = object

export {
  list,
  multilingual,
  object,
  group,
  slider,
  file,
}

export default base