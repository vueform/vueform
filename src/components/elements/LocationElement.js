import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import HasAddons from './../../mixins/HasAddons'
import useLocation from './../../composables/elements/useLocation'

export default {
  name: 'LocationElement',
  mixins: [BaseElement, BaseValidation, HasAddons, CanBeDisabled],
  init: useLocation,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "displayKey": { "type": string", "description": "The name of object key which contains the address that should be displayed to the user in the input field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: 'formatted_address'." },
     *  "provider": { "type": string", "description": "The Places API provider to use: 'google|algolia'. Default: 'google'." },
     *  "formatValue": { "type": function", "description": "A function that formats value before displaying as `value`. Should return the same data type as the element's original. Params:<br> **value**: the original value of the element<br> **el$**: the element component" },
     *  "options": { "type": object", "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." },
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      /**
       * The location service that's initalized once the component is mounted.
       * 
       * @type {class}
       * @default null
       */
      locationService: null,

      /**
       * The raw location object of location provider (Google/Algolia).
       * 
       * @type {class}
       * @default null
       */
      location: {},
    }
  },
  watch: {
    provider() {
      this.locationService.destroy()
      this.initLocationService()
    },
    options: {
      handler() {
        if (_.isEqual(this.options, this.locationService.options)) {
          return
        }

        this.locationService.init(this.options)
      },
      deep: true
    }
  },
  computed: {

    /**
     * The value of the element.
     * 
     * @type {any}
     */
    value: {
      get() {
        return this.model
      },
      set(value) {
        this.model = this.formatValue(value, this)

        if (this.$refs.input && value && value[this.displayKey] && this.$refs.input.value != value[this.displayKey]) {
          this.$refs.input.value = value[this.displayKey] !== undefined ? value[this.displayKey] : ''
        }
      }
    },

    /**
     * Helper property used for tracking the field's value.
     * 
     * @type {any}
     * @ignore
     */
    model: {
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    /**
     * A function that formats value before displaying as `value`.
     * 
     * @type {function}
     */
    formatValue: {
      get() {
        return this.schema.formatValue !== undefined ? this.schema.formatValue : this.defaultFormatValue
      },
      set(value) {
        this.$set(this.schema, 'formatValue', value)
      }
    },

    /**
     * The name of object key which contains the address that should be displayed to the user in the input
     * field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using
     * [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: "formatted_address".
     * 
     * @type {string}
     */
    displayKey: {
      get() {
        return this.schema.displayKey !== undefined ? this.schema.displayKey : 'formatted_address'
      },
      set(value) {
        this.$set(this.schema, 'displayKey', value)
      }
    },

    /**
     * The Places API provider to use.
     * 
     * @type {string}
     */
    provider: {
      get() {
        if (this.schema.provider === undefined) {
          return 'google'
        }

        if (['google', 'algolia'].indexOf(this.schema.provider) === -1) {
          throw new Error('Location provider can be `google` or `algolia`')
        }

        return this.schema.provider
      },
      set(value) {
        this.$set(this.schema, 'provider', value)
      }
    },

    /**
    * The 'id' attribute of the field.
    * 
    * @type {string} 
    * @default null
    */
    id: {
      get() {
        return this.schema.id !== undefined ? this.schema.id : this.path
      },
      set(value) {
        this.$set(this.schema, 'id', value)
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string}
    * @default null
    */
    placeholder: {
      get() {
        return this.schema.placeholder || null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },

    /**
    * The floating label of the element.
    * 
    * @type {string} 
    * @default null
    */
    floating: {
      get() {
        return this.schema.floating || null
      },
      set(value) {
        this.$set(this.schema, 'floating', value)
      }
    },

    /**
    * Whether the field is *readonly*.
    * 
    * @type {boolean} 
    * @default false
    */
    readonly: {
      get() {
        return this.schema.readonly !== undefined ? this.schema.readonly : false
      },
      set(value) {
        this.$set(this.schema, 'readonly', value)
      }
    },

    /**
    * Default options for flatpickr.
    * 
    * @type {object} 
    * @default {}
    * @ignore
    */
    defaultOptions() {
      let providers = {
        google: {
          fields: ['geometry', 'formatted_address', 'address_components'],
        },
        algolia: {
          type: 'address',
          appId: this.$laraform.services.algolia.app_id,
          apiKey: this.$laraform.services.algolia.api_key,
        }
      }

      return providers[this.provider]
    },

    /**
    * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
    * 
    * @type {object} 
    * @default {}
    */
    options: {
      get() {
        return Object.assign({}, this.defaultOptions, this.schema.options || {})
      },
      set(value) {
        this.$set(this.schema, 'options', value)
      }
    },

    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {any}
     * @ignore
     */
    null() {
      return {}
    },
  },
  methods: {

    /**
     * The default logic to be used to `formatValue`.
     *
     * @public
     * @param {any} value the original value of the element
     * @param {component} el$ the element component
     * @returns {any}
     */
    defaultFormatValue(value, el$) {
      return value
    },

    /**
     * Handles location service's address change.
     *
     * @public
     * @param {object} data an object containing address data
     * @param {object} raw an object containing raw address data (based on provider)
     */
    handleAddressChange(data, raw) {
      this.location = raw
      this.value = this.formatValue(data)

      this.handleChange()
    },

    /**
     * Initalizes location service.
     *
     * @public
     * @returns {void}
     */
    initLocationService() {
      this.locationService = new this.$laraform.services.location[this.provider](this)
      this.locationService.init(this.$refs.input, this.handleAddressChange, this.options)
    },

    /**
     * Inits the element.
     * 
     * @private 
     * @returns {void}
     */
    $_initElement() {
      this.value = _.clone(this.default)

      this.$nextTick(() => {
        if (this.value && this.value[this.displayKey]) {
          this.$refs.input.value = this.value[this.displayKey]
        }
      })
    },
  },
  mounted() {
    this.initLocationService()
  }
}