<script>
  import BaseAddressElement from './BaseAddressElement.vue'
  import Places from 'places.js'

  export default {
    name: 'BaseAddressElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "fields": { "type": "object", "description": "Fields of the address. Elements with the following keys will be filled in automatically: `address`, `address2`, `zip`, `city`, `state`, `country`. Having different field keys requires you to manage suggestions on your own via `addressChange` event. " },
       *  "main": { "type": "string", "description": "Key of element which should trigger the address suggestion." }
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
         * Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.
         * 
         * @type {object} 
         * @default {...}
         */
        fields: {
          address: {
            type: 'text',
            label: this.__('elements.address.addressLabel'),
          },
          address2: {
            type: 'text',
            label: this.__('elements.address.address2Label'),
          },
          zip: {
            type: 'text',
            label: this.__('elements.address.zipLabel'),
          },
          city: {
            type: 'text',
            label: this.__('elements.address.cityLabel'),
          },
          state: {
            type: 'text',
            label: this.__('elements.address.stateLabel'),
          },
          country: {
            type: 'text',
            label: this.__('elements.address.countryLabel'),
          },
        },

        /**
         * Key of element which should trigger the address suggestion.
         * 
         * @type {string}
         * @default 'address'
         */
        main: 'address',

        /**
         * Helper property used to store available events for the element.
         * 
         * @private
         * @type {array}
         * @default []
         */
        events: [
          'change', 'addressChange'
        ],
      }
    },
    computed: {

      /**
       * Determines whether custom fields are used.
       * 
       * @type {boolean}
       */
      custom() {
        return this.schema.fields
      },

      /**
       * Schema of child elements.
       * 
       * @type {object}
       * @ignore
       */
      children() {
        return this.fields
      },

      /**
       * Returns the list of elements which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      elements_() {
        return _.keys(_.keyBy(this.fields, 'type')).map((item) => {
          return item.replace('-', '')
        })
      },

      /**
       * Returns the list of components which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      components_() {
        var components = []

        _.each(this.fields, (element) => {
          if (element.component && typeof element.component == 'string') {
            components.push(element.component)
          }
        })

        return components
      }
    },
    methods: {

      /**
       * Returns US state code for a written state name.
       * 
       * @public
       * @param {string} state written name of the state.
       * @returns {string}
       */
      getStateCode(state) {
        return _.findKey(states, (oneState, key) => {
          return oneState == state ? key : false
        })
      },

      /**
       * Triggered when an address is selected. If not defined, by default the suggestions are
       *
       * @public
       * @param {object} suggestion an object containing address [suggestion](https://community.algolia.com/places/documentation.html#suggestions).
       * @event addressChange
       */
      handleAddressChange(suggestion) {
        if (this.listeners.addressChange) {
          this.fire('addressChange', {suggestion})
          return
        }

        if (this.children$.address) {
          this.children$.address.update(suggestion.value || '')
        }

        if (this.children$.address2) {
          this.children$.address2.update('')
        }

        if (this.children$.city) {
          this.children$.city.update(suggestion.city || '')
        }

        if (this.children$.zip) {
          this.children$.zip.update(suggestion.postcode || '')
        }

        if (this.children$.state) {
          this.children$.state.update(suggestion.countryCode == 'us'
            ? this.getStateCode(suggestion.administrative) : ''
          )
        }

        if (this.children$.country) {
          this.children$.country.update(suggestion.countryCode
            ? suggestion.countryCode.toUpperCase() : ''
          )
        }
      },

      /**
       * Initalizes the place API.
       * 
       * @private 
       * @param {string} state state name
       * @returns {string}
       */
      $_initPlaces() {
        var places = Places({
          appId: laraform.config.placesjs.appId,
          apiKey: laraform.config.placesjs.apiKey,
          type: 'address',
          container: document.querySelector('#' + this.fields[this.main].id),
          templates: {
            value: function(suggestion) {
              return suggestion.name;
            }
          },
        })

        places.on('change', (e) => {
          if (this.fire('change', e) === false) {
            return
          }

          this.handleAddressChange(e.suggestion)
        })
      },
    },
    created() {
      this.$_copy([
        'fields', 'main',
      ])
  
      var id = this.fields[this.main].id || this.main

      this.fields[this.main].id = id + '-' + Math.floor(Math.random() * 100000000)
    },
    mounted() {
      this.$_initPlaces()

      if (!this.custom) {
        this.children$.state.conditions = [[this.path + '.country', ['us', 'US']]]
      }
    }
  }

  const states = {
    AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California', CO: 'Colorado',
    CT: 'Connecticut', DE: 'Delaware', DC: 'District Of Columbia', FL: 'Florida', GA: 'Georgia',
    HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky',
    LA: 'Louisiana', ME: 'Maine', MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota',
    MS: 'Mississippi', MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
    NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota',
    OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
    SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont', VA: 'Virginia',
    WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming'
  }
</script>
