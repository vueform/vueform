export default {
  data() {
    return {

      /**
       * Helper property used to store the dirty and validated state of the
       * element by language.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      state: {
        dirty: {} ,
        validated: {},
      },

      /**
       * Any array containing all the validators of the element by language.
       * 
       * @type {object}
       * @default {}
       */
      Validators: {},
    }
  },
  computed: {

    /**
     * Whether the element's value has been modified by the user.
     * 
     * @type {boolean}
     */
    dirty() {
      return _.some(this.state.dirty, (value) => {
        return value === true
      })
    },

    /**
     * Whether the element's input has already been validated at least once.
     * 
     * @type {boolean}
     */
    validated() {
      return !_.some(this.state.validated, (value) => {
        return value === false
      })
    },

    /**
     * Whether the element has any failing rules.
     * 
     * @type {boolean}
     */
    invalid() {
      var invalid = false

      _.each(this.Validators, (Validators) => {
        if (_.some(Validators, { invalid: true })) {
          invalid = true
        }
      })

      return invalid
    },

    /**
     * Whether the element has any async rules in progress.
     * 
     * @type {boolean}
     */
    pending() {
      var pending = false

      _.each(this.Validators, (Validators) => {
        if (_.some(Validators, { pending: true })) {
          pending = true
        }
      })

      return pending
    },

    /**
     * Whether the element has an ongoing debounce.
     * 
     * @type {boolean}
     */
    debouncing() {
      var debouncing = false

      _.each(this.Validators, (Validators) => {
        if (_.some(Validators, { debouncing: true })) {
          debouncing = true
        }
      })

      return debouncing
    },

    /**
     * Whether the element is `pending` or `debouncing`.
     * 
     * @type {boolean}
     */
    busy() {
      return this.pending || this.debouncing
    },

    /**
     * Valiation rules for the element for each language.
     * 
     * @type {object}
     * @ignore
     */
    rules() {
      var rules = {}

      if (!this.schema.rules) {
        return rules
      }

      _.each(this.languages, (language) => {
        rules[language] = _.isPlainObject(this.schema.rules)
          ? (this.schema.rules[language] || '')
          : this.schema.rules
      })

      return rules
    },

    /**
     * List of errors of failing rules.
     * 
     * @type {array}
     */
    errors() {
      var errors = []

      _.each(this.Validators, (Validators, language) => {
        _.each(Validators, (Validator) => {
          if (Validator.failing) {
            errors.push(Validator.message + ' (' + language + ')')
          }
        })
      })

      return errors
    },

    /**
     * The element's error.
     * 
     * @type {string}
     */
    error() {
      var error = null

      _.each(this.Validators[this.language], (Validator) => {
        if (error !== null) {
          return false
        }

        if (Validator.failing) {
          error = Validator.message
        }
      })

      let errors = this.messageBag.prepends.errors

      if (error !== null) {
        errors = _.concat(errors, [error])
      }

      errors = _.concat(errors, this.messageBag.appends.errors)

      return _.head(errors)
    }
  },
  methods: {

    /**
     * Validates the element.
     * 
     * @public
     * @returns {void}
     */
    validate() {
      _.each(this.languages, (language) => {
        this.validateLanguage(language)
      })
    },

    /**
     * Check all validation rules in one language.
     * 
     * @public
     * @param {string} language language code.
     * @returns {void}
     */
    validateLanguage(language) {
      if (this.form$.validation === false) {
        return
      }
      
      if (language === undefined) {
        language = this.language
      }

      if (!this.schema.rules) {
        return
      }

      _.each(this.Validators[language], (Validator) => {
        Validator.validate(this.value[language])
      })

      this.state.validated[language] = true
    },

    /**
     * Flag the element as dirty.
     * 
     * @public
     * @returns {void}
     */
    dirt() {
      this.state.dirty[this.language] = true
    },

    /**
     * Flag the element as non dirty.
     * 
     * @public
     * @returns {void}
     */
    clean() {
      this.state.dirty[this.language] = false
    },

    /**
     * Set the validated state to false.
     * 
     * @public
     * @returns {void}
     */
    resetValidators() {
      _.each(this.languages, (language) => {
        _.each(this.Validators[language], (Validator) => {
          Validator.reset()
        })

        _.each(this.rules, (rules, language) => {
          this.state.validated[language] = rules.length > 0 ? false : true
        })
      })
    },

    /**
     * Initalizes the default dirty and validated states for reach languages.
     * 
     * @private
     * @returns {void}
     */
    $_initState() {
      var dirty = {}
      var validated = {}

      _.each(this.languages, (language) => {
        dirty[language] = false
      })

      _.each(this.languages, (language) => {
        validated[language] = true
      })

      this.$set(this.state, 'dirty', dirty)
      this.$set(this.state, 'validated', validated)
    },

    /**
     * Initalizes validators or each languages.
     * 
     * @private
     * @returns {void}
     */
    $_initValidation() {
      this.$_initState()

      if (!this.schema.rules) {
        return  
      }

      // If the element has rules it does not
      // qualify as validated by default
      _.each(this.rules, (rules, language) => {
        this.state.validated[language] = rules.length > 0 ? false : true
      })

      var factory = new this.$laraform.services.validation.factory(this)

      _.each(this.rules, (rules, language) => {
        if (!this.Validators[language]) {
          this.$set(this.Validators, language, [])
        }

        _.each(factory.makeAll(rules), (Validator) => {
          this.Validators[language].push(Validator)
        })
      }) 
    }
  },
}