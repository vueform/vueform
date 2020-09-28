import BaseValidation from './BaseValidation'

export default {
  mixins: [BaseValidation],
  computed: {
    /**
     * Whether the element's value has been modified by the user.
     * 
     * @type {boolean}
     */
    dirty() {
      return _.some(this.children$, { available: true, dirty: true })
        || this.state.dirty
    },

    /**
     * Whether the element's input has already been validated at least once.
     * 
     * @type {boolean}
     */
    validated() {
      return !_.some(this.children$, { available: true, validated: false })
        && this.state.validated
    },

    /**
     * Whether the element has any failing rules.
     * 
     * @type {boolean}
     */
    invalid() {
      return _.some(this.children$, { available: true, invalid: true })
        || _.some(this.Validators, { invalid: true })
    },

    /**
     * Whether the element has any async rules in progress.
     * 
     * @type {boolean}
     */
    pending() {
      return _.some(this.children$, { available: true, pending: true })
        || _.some(this.Validators, { pending: true })
    },

    /**
     * Whether the element has an ongoing debounce.
     * 
     * @type {boolean}
     */
    debouncing() {
      return _.some(this.children$, { available: true, debouncing: true })
        || _.some(this.Validators, { debouncing: true })
    },

    /**
     * Whether the element is `pending` or `debouncing`.
     * 
     * @type {boolean}
     */
    busy() {
      return _.some(this.children$, { available: true, busy: true })
        || this.pending || this.debouncing
    },

    /**
     * List of errors of failing rules.
     * 
     * @type {array}
     */
    errors() {
      var errors = []

      _.each(this.validatorErrors, (error) => {
        errors.push(error)
      })

      _.each(this.children$, (element$) => {
        if (!element$.available) {
          return
        }

        _.each(element$.errors, (error) => {
          errors.push(error)
        })
      })

      return errors
    },

    /**
     * List of errors collected from failing validator rules.
     * 
     * @type {array}
     * @ignore
     */
    validatorErrors() {
      var errors = []

      _.each(this.Validators, (Validator) => {
        if (Validator.failing) {
          errors.push(Validator.message)
        }
      })

      return errors
    },

    /**
     * The element's error.
     * 
     * @type {string}
     */
    error() {
      return _.head(this.validatorErrors)
    },
  },
  methods: {
    
    /**
     * Validates the element.
     * 
     * @public
     * @returns {void}
     */
    validate() {
      this.validateValidators()
      this.validateChildren()
    },
    
    /**
     * Validates the element.
     * 
     * @private
     * @returns {void}
     */
    validateValidators() {
      _.each(this.Validators, (Validator) => {
        Validator.validate()
      })

      this.state.validated = true
    },
    
    /**
     * Validates each children.
     * 
     * @private
     * @returns {void}
     */
    validateChildren() {
      _.each(this.children$, (element$) => {
        element$.validate()
      })
    },
  }
}