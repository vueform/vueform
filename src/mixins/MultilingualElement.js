import BaseElement from './BaseElement'

export default {
  mixins: [BaseElement],
  data() {
    return {

      /**
       * Helper property used to store the elements previous value.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      previousValue: {},

      /**
       * Helper property used to store the elements value.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      currentValue: {},
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

    default: {
      get() {
        if (this.schema.default === undefined) {
          return _.clone(this.null)
        }

        if (!_.isPlainObject(this.schema.default)) {
          throw new Error('Translatable element\'s default param must be an object')
        }

        return Object.assign({}, this.null, this.schema.default)
      },
      set(value) {
        this.$set(this.schema, 'default', value)
      },
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

    /**
     * Determines whether the element is multilingual.
     * 
     * @type {boolean} 
     */
    isMultilingual() {
      return true
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
        this.clear()

        this.$nextTick(() => {
          this.clean()
        })

        return
      }

      if (!_.isPlainObject(data[this.name])) {
        throw new Error('Multilingual element requires object to load')
      }

      this.value = Object.assign({}, _.clone(this.null), data[this.name])

      this.$nextTick(() => {
        this.clean()
      })
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
      this.value = _.clone(this.default)

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
     * @param {string|number} value the value after change
     * @returns {void}
     */
    handleKeyup(value) {
      if (this.readonly) {
        return
      }

      this.handleChange()
    },

    /**
     * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed. Can prevent further execution (element validation) if returns `false`.
     *
     * @public
     * @prevents 
     * @param {string|number} oldValue the value before change
     * @param {string|number} newValue the value after change
     * @event change
     */
    handleChange(oldValue, newValue) {
      if (this.fire('change', this.previousValue, this.value) === false) {
        return
      }

      if (this.form$.$_shouldValidateOn('change')) {
        this.validateLanguage()
      }
    },
  },
  created() {
    this.previousValue = _.clone(this.null)
  }
}