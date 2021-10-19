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
   * @type {array<Validator>}
   * @default []
   * @private
   */
  const Validators = ref([])

  /**
   * Instance of MessageBag service.
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
   * The list of errors of failing rules.
   * 
   * @type {array}
   * @private
   */
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

  // =============== METHODS ===============

  /**
   * Checks each validation rule for the element (async).
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
   * Sets the validators to default state.
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
   * Initalizes MessageBag service.
   * 
   * @returns {void}
   * @private
   */
  const initMessageBag = () => {
    messageBag.value = new form$.value.$laraform.services.messageBag(validatorErrors)
  }

  /**
   * Initalizes validators.
   * 
   * @returns {void}
   * @private
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

  const dirty = computed(() => {
    return _.some(children$.value, { available: true, dirty: true })
      || state.value.dirty
  })

  const validated = computed(() => {
    return !_.some(children$.value, { available: true, validated: false })
      && state.value.validated
  })

  const invalid = computed(() => {
    return _.some(children$.value, { available: true, invalid: true })
      || _.some(Validators.value, { invalid: true })
  })

  const pending = computed(() => {
    return _.some(children$.value, { available: true, pending: true })
      || _.some(Validators.value, { pending: true })
  })

  const debouncing = computed(() => {
    return _.some(children$.value, { available: true, debouncing: true })
      || _.some(Validators.value, { debouncing: true })
  })

  const busy = computed(() => {
    return _.some(children$.value, { available: true, busy: true })
      || pending.value || debouncing.value
  })

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
   * The list of errors collected from children.
   * 
   * @type {array}
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
   * The `validatorErrors` concated with `childrenErrors`.
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
    return _.head(validatorErrors.value)
  })

  // =============== METHODS ==============

  /**
   * Checks each validation rule for the element and validates children (async).
   * 
   * @returns {void}
   */
  const validate = () => {
    validateValidators()
    validateChildren()
  }
  
  /**
   * Checks each validation rule for the element (async).
   * 
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
   * Validates every child (async).
   * 
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

  const clean = () => {
    _.each(children$.value, (element$) => {
      element$.clean()
    })

    state.value.dirty = false
  }

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

    _.each(languages.value, (label, lang) => {
      ruleList[lang] = _.isPlainObject(rules.value)
        ? (rules.value[lang] || null)
        : rules.value
    })

    return ruleList
  })

  const dirty = computed(() => {
    return _.some(state.value.dirty, (val) => {
      return val === true
    })
  })

  const validated = computed(() => {
    return !_.some(state.value.validated, (val) => {
      return val === false
    })
  })

  const invalid = computed(() => {
    var invalid = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { invalid: true })) {
        invalid = true
      }
    })

    return invalid
  })

  const pending = computed(() => {
    var pending = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { pending: true })) {
        pending = true
      }
    })

    return pending
  })

  const debouncing = computed(() => {
    var debouncing = false

    _.each(Validators.value, (Validators) => {
      if (_.some(Validators, { debouncing: true })) {
        debouncing = true
      }
    })

    return debouncing
  })

  const busy = computed(() => {
    return pending.value || debouncing.value
  })

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

  const errors = computed(() => {
    return messageBag.value.errors
  })

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
   * Checks each validation rule for the element in every language (async).
   * 
   * @returns {void}
   */
  const validate = async () => {
    _.each(languages.value, (label, lang) => {
      validateLanguage(lang)
    })
  }

  /**
   * Checks each validation rule for the element in a specific language (async).
   * 
   * @param {string} lang the langauage to check (defaults to currently selected language)
   * @returns {void}
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

  const resetValidators = () => {
    _.each(languages.value, (label, lang) => {
      _.each(Validators.value[lang], (Validator) => {
        Validator.reset()
      })

      _.each(validationRules.value, (r, lang) => {
        state.value.validated[lang] = r.length > 0 ? false : true
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

    _.each(languages.value, (label, lang) => {
      dirty[lang] = false
    })

    _.each(languages.value, (label, lang) => {
      validated[lang] = true
    })

    state.value = {
      dirty,
      validated,
    }
  }

  const initMessageBag = () => {
    messageBag.value = new form$.value.$laraform.services.messageBag(validatorErrors)
  }

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

  const dirty = computed(() => {
    return _.some(children$.value, { available: true, dirty: true })
  })

  const validated = computed(() => {
    return !_.some(children$.value, { available: true, validated: false })
  })

  const invalid = computed(() => {
    return _.some(children$.value, { available: true, invalid: true })
  })

  const pending = computed(() => {
    return _.some(children$.value, { available: true, pending: true })
  })

  const debouncing = computed(() => {
    return _.some(children$.value, { available: true, debouncing: true })
  })

  const busy = computed(() => {
    return _.some(children$.value, { available: true, busy: true })
  })

  /**
   * The list of errors collected from children.
   * 
   * @type {array}
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

  const errors = computed(() => {
    return messageBag.value.errors
  })


  // =============== METHODS ==============

  const validate = () => {
    _.each(children$.value, (element$) => {
      if (!element$.available || element$.isStatic) {
        return
      }

      element$.validate()
    })
  }

  const clean = () => {
    _.each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }

      element$.clean()
    })
  }

  const resetValidators = () => {
    _.each(children$.value, (element$) => {
      if (element$.isStatic) {
        return
      }
      
      element$.resetValidators()
    })
  }
  
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
   * Whether the element is `pending`, `debouncing`, `uploading` or `removing`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return pending.value || debouncing.value || uploading.value || removing.value
  })

  // =============== METHODS ==============

  /**
   * Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.
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