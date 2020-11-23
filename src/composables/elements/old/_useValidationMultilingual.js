import { computed, reactive, onMounted, watch, toRefs, ref, nextTick } from 'composition-api'
import useValidation from './useValidation'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

   // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const path = dependencies.path
  const languages = dependencies.languages
  const language = dependencies.language
  const value = dependencies.value
  const { messageBag, messages, displayError, initMessageBag } = useValidation(props, context, dependencies)

  // ================ DATA ================

  const state = ref({
    dirty: {},
    validated: {},
  })

  const Validators = ref({})

  // ============== COMPUTED ===============
  
  const rules = computed(() => {
    var ruleList = {}

    if (!schema.value.rules) {
      return ruleList
    }

    _.each(languages.value, (lang) => {
      ruleList[lang] = _.isPlainObject(schema.value.rules)
        ? (schema.value.rules[lang] || null)
        : schema.value.rules
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

  const errors = computed(() => {
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
   * @public
   * @returns {void}
   */
  const validate = async () => {
    _.each(languages.value, (language) => {
      validateLanguage(language)
    })
  }

  const validateLanguage = (lang = language.value) => {
    if (form$.value.validation === false) {
      return
    }

    if (!schema.value.rules) {
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
   * @public
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(languages.value, (language) => {
      _.each(Validators.value[language], (Validator) => {
        Validator.reset()
      })

      _.each(rules.value, (rules, language) => {
        state.value.validated[language] = rules.length > 0 ? false : true
      })
    })
  }

  /**
   * Flag the element as dirty.
   * 
   * @public
   * @returns {void}
   */
  const dirt = () => {
    state.value.dirty[language.value] = true
  }

  /**
   * Flag the element as non dirty.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    state.value.dirty[language.value] = false
  }

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
   * Initalizes validators.
   * 
   * @private
   * @returns {void}
   */
  const initValidation = () => {
    if (!schema.value.rules) {
      return  
    }

    // If the element has rules it does not
    // qualify as validated by default
    _.each(rules.value, (rules, lang) => {
      state.value.validated[lang] = rules !== null && rules.length > 0 ? false : true
    })

    var factory = new form$.value.$laraform.services.validation.factory(path.value, form$.value)

    _.each(rules.value, (languageRules, lang) => {
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
    validateLanguage,
    dirt,
    clean,
    resetValidators,
    initState,
    initMessageBag,
    initValidation,
  }
}