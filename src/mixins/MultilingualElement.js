import BaseElement from './BaseElement'

export default {
  mixins: [BaseElement],
  data() {
    return {

      /**
       * Helper property used to store the elements value.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      memory: {},
    }
  },
  computed: {

    /**
     * Helper property used for tracking the field's value.
     * 
     * @type {object}
     * @ignore
     */
    model: {
      get() {
        return this.value[this.language]
      },
      set(value) {
        this.value[this.language] = value
      }
    },
    
    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {object}
     * @ignore
     */
    null() {
      var value = {}

      _.each(this.languages, (code) => {
        value[code] = null
      })

      return value
    },

    /**
     * Current language.
     * 
     * @type {string}
     */
    language() {
      return this.form$.language
    },

    /**
     * Available language codes.
     * 
     * @type {string}
     */
    languages() {
      return _.keys(this.form$.languages)
    },
  },
  methods: {
    
    /**
     * Loads data for element or clears the element if the element's key is not found in the `data` object.
     *
     * @public
     * @param {object} data an object containing data for the element using its **name as key**
     * @returns {void}
     */
    load(data) {
      if (!this.available || data[this.name] === undefined) {
        this.value = _.clone(this.null)
        return
      }

      if (!_.isPlainObject(data[this.name])) {
        throw new Error('Multilingual element requires object to load')
      }

      this.value = Object.assign({}, _.clone(this.null), data[this.name])
    },

    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @returns {void}
     */
    update(value) {
      this.value = Object.assign({}, this.value, value)
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.value = _.clone(this.defaultValue)

      this.resetValidators()
    },

    /**
     * Clears the value of the element.
     *
     * @public
     * @returns {void}
     */
    clear() {
      this.value = _.clone(this.null)
    },

    /**
     * Handles the keyup event of the input field if the field has free text input.
     * 
     * @private 
     * @returns {void}
     */
    handleKeyup() {
      if (this.form$.$_shouldValidateOn('change')) {
        this.validateLanguage()
      }
    },

    /**
     * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed. Can prevent further execution (element validation) if returns `false`.
     *
     * @public
     * @prevents 
     * @event change
     */
    handleChange() {
      if (this.form$.$_shouldValidateOn('change')) {
        this.validateLanguage()
      }
    },

    /**
     * Inits the element.
     * 
     * @private 
     * @returns {void}
     */
    $_initElement() {
      this.$_initDefault()

      this.value = _.clone(this.defaultValue)
    },

    /**
     * Inits default value for the element.
     * 
     * @private 
     * @returns {void}
     */
    $_initDefault() {
      if (this.schema.default === undefined) {
        this.defaultValue = this.null
        return
      }

      if (!_.isPlainObject(this.schema.default)) {
        throw new Error('Translatable element\'s default param must be an object')
      }

      this.defaultValue = Object.assign({}, this.null, this.schema.default)
    },
  },
}