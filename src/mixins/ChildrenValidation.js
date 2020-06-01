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
    },

    /**
     * Whether the element's input has already been validated at least once.
     * 
     * @type {boolean}
     */
    validated() {
      return !_.some(this.children$, { available: true, validated: false })
    },

    /**
     * Whether the element has any failing rules.
     * 
     * @type {boolean}
     */
    invalid() {
      return _.some(this.children$, { available: true, invalid: true })
    },

    /**
     * Whether the element has any async rules in progress.
     * 
     * @type {boolean}
     */
    pending() {
      return _.some(this.children$, { available: true, pending: true })
    },

    /**
     * Whether the element has an ongoing debounce.
     * 
     * @type {boolean}
     */
    debouncing() {
      return _.some(this.children$, { available: true, debouncing: true })
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
     * List of errors of failing rules.
     * 
     * @type {array}
     */
    errors() {
      var errors = []

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
     * The element's error.
     * 
     * @type {string}
     */
    error() {
      return null
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
      _.each(this.children$, (element$) => {
        element$.validate()
      })
    },
    
    /**
     * Flag the element as dirty.
     * 
     * @public
     * @returns {void}
     */
    dirt() {
      // no effect
    },
  }
}