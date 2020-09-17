import TrixElement from './TrixElement'
import MultilingualElement from './../../mixins/MultilingualElement'
import MultilingualValidation from './../../mixins/MultilingualValidation'

export default {
  mixins: [TrixElement, MultilingualElement, MultilingualValidation],
  name: 'TTrixElement',
  watch: {
    language() {
      this.refresh()
    }
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
        return
      }

      if (!_.isPlainObject(data[this.name])) {
        throw new Error('Multilingual element requires object to load')
      }

      this.value = Object.assign({}, _.clone(this.null), data[this.name])
      this.refresh()
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
      this.refresh()
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.value = _.clone(this.defaultValue)
      this.refresh()

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
      this.refresh()
    },

    /**
     * Refreshes trix data.
     *
     * @public
     * @returns {void}
     */
    refresh() {
      this.trix$.update(this.model)
    }
  }
}