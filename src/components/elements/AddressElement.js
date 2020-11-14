import ObjectElement from './ObjectElement'
import useAddress from './../../composables/elements/useAddress'

export default {
  name: 'AddressElement',
  mixins: [ObjectElement],
  init: useAddress,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "required": { "type": "boolean", "description": "Determines whether `required` rules should be added to address fields. Default: `false` " }
     *  "disabled": { "type": "boolean", "description": "Determines whether fields are disabled." }
     *  "readonly": { "type": "boolean", "description": "Determines whether fields are readonly." }
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

        this.locationService.destroy()
        this.locationService.init(this.options)
      },
      deep: true
    }
  },
  computed: {

    /**
     * Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.
     * 
     * @type {object} 
     * @default {...}
     */
    fields() {
      let fields = {
        address: {
          type: 'text',
          label: this.__('laraform.elements.address.addressLabel'),
          id: `address-${Math.floor(Math.random() * 100000000)}`,
          disabled: this.disabled,
          readonly: this.readonly,
        },
        address2: {
          type: 'text',
          label: this.__('laraform.elements.address.address2Label'),
          disabled: this.disabled,
          readonly: this.readonly,
        },
        zip: {
          type: 'text',
          label: this.__('laraform.elements.address.zipLabel'),
          disabled: this.disabled,
          readonly: this.readonly,
        },
        city: {
          type: 'text',
          label: this.__('laraform.elements.address.cityLabel'),
          disabled: this.disabled,
          readonly: this.readonly,
        },
        state: {
          type: 'select',
          label: this.__('laraform.elements.address.stateLabel'),
          items: states,
          conditions: [[this.path + '.country', ['us', 'US']]],
          disabled: this.disabled,
          readonly: this.readonly,
        },
        country: {
          type: 'select',
          label: this.__('laraform.elements.address.countryLabel'),
          items: countries,
          disabled: this.disabled,
          readonly: this.readonly,
        },
      }

      if (this.required) {
        fields.address.rules = 'required'
        fields.zip.rules = 'required'
        fields.city.rules = 'required'
        fields.state.rules = 'required'
        fields.country.rules = 'required'
      }

      return fields
    },

    /**
     * Determines whether `required` rules should be added to address fields. Default: `false`
     * 
     * @type {boolean}
     * @default false
     */
    required: {
      get() {
        return this.schema.required !== undefined ? this.schema.required : false
      },
      set(value) {
        this.$set(this.schema, 'required', value)
      }
    },

    /**
     * Determines whether fields are disabled.
     * 
     * @type {boolean}
     * @default false
     */
    disabled: {
      get() {
        return this.schema.disabled !== undefined ? this.schema.disabled : false
      },
      set(value) {
        this.$set(this.schema, 'disabled', value)
      }
    },

    /**
     * Determines whether fields are readonly.
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
          templates: {
            value: function(suggestion) {
              return suggestion.name;
            }
          },
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
     * Schema of child elements.
     * 
     * @type {object}
     * @ignore
     */
    children() {
      return this.fields
    },
  },
  methods: {

    /**
     * Updates fields with address data.
     *
     * @public
     * @param {object} data an object containing address data
     */
    updateFields(data) {
      if (this.children$.address) {
        this.children$.address.update(data.address || null, true)
      }

      if (this.children$.city) {
        this.children$.city.update(data.city || null, true)
      }

      if (this.children$.zip) {
        this.children$.zip.update(data.zip || null, true)
      }

      if (this.children$.state) {
        this.children$.state.update(data.state_code ? data.state_code.toUpperCase() : null, true)
      }

      if (this.children$.country) {
        this.children$.country.update(data.country_code ? data.country_code.toUpperCase() : null, true)
      }

      if (document.getElementById(this.fields.address.id)) {
       document.getElementById(this.fields.address.id).value = data.address || ''
      }
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
      this.updateFields(data)

      this.$nextTick(() => {
        this.handleChange()
      })
    },

    /**
     * Initalizes location service.
     *
     * @public
     * @returns {void}
     */
    initLocationService() {
      this.locationService = new this.$laraform.services.location[this.provider](this)
      this.locationService.init(document.getElementById(this.fields.address.id), this.handleAddressChange, this.options)
    },
  },
  mounted() {
    this.initLocationService()
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

const countries = {
  AF: 'Afghanistan', AX: 'Aland Islands', AL: 'Albania', DZ: 'Algeria', AS: 'American Samoa',
  AD: 'Andorra', AO: 'Angola', AI: 'Anguilla', AQ: 'Antarctica', AG: 'Antigua And Barbuda',
  AR: 'Argentina', AM: 'Armenia', AW: 'Aruba', AU: 'Australia', AT: 'Austria', AZ: 'Azerbaijan',
  BS: 'Bahamas', BH: 'Bahrain', BD: 'Bangladesh', BB: 'Barbados', BY: 'Belarus', BE: 'Belgium',
  BZ: 'Belize', BJ: 'Benin', BM: 'Bermuda', BT: 'Bhutan', BO: 'Bolivia', BA: 'Bosnia And Herzegovina',
  BW: 'Botswana', BV: 'Bouvet Island', BR: 'Brazil', IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam', BG: 'Bulgaria', BF: 'Burkina Faso', BI: 'Burundi', KH: 'Cambodia',
  CM: 'Cameroon', CA: 'Canada', CV: 'Cape Verde', KY: 'Cayman Islands', CF: 'Central African Republic',
  TD: 'Chad', CL: 'Chile', CN: 'China', CX: 'Christmas Island', CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia', KM: 'Comoros', CG: 'Congo', CD: 'Congo,  Democratic Republic', CK: 'Cook Islands',
  CR: 'Costa Rica', CI: 'Cote D\'Ivoire', HR: 'Croatia', CU: 'Cuba', CY: 'Cyprus', CZ: 'Czech Republic',
  DK: 'Denmark', DJ: 'Djibouti', DM: 'Dominica', DO: 'Dominican Republic', EC: 'Ecuador', EG: 'Egypt',
  SV: 'El Salvador', GQ: 'Equatorial Guinea', ER: 'Eritrea', EE: 'Estonia', ET: 'Ethiopia',
  FK: 'Falkland Islands (Malvinas)', FO: 'Faroe Islands', FJ: 'Fiji', FI: 'Finland', FR: 'France',
  GF: 'French Guiana', PF: 'French Polynesia', TF: 'French Southern Territories', GA: 'Gabon',
  GM: 'Gambia', GE: 'Georgia', DE: 'Germany', GH: 'Ghana', GI: 'Gibraltar', GR: 'Greece', GL: 'Greenland',
  GD: 'Grenada', GP: 'Guadeloupe', GU: 'Guam', GT: 'Guatemala', GG: 'Guernsey', GN: 'Guinea',
  GW: 'Guinea-Bissau', GY: 'Guyana', HT: 'Haiti', HM: 'Heard Island & Mcdonald Islands',
  VA: 'Holy See (Vatican City State)', HN: 'Honduras', HK: 'Hong Kong', HU: 'Hungary', IS: 'Iceland',
  IN: 'India', ID: 'Indonesia', IR: 'Iran,  Islamic Republic Of', IQ: 'Iraq', IE: 'Ireland',
  IM: 'Isle Of Man', IL: 'Israel', IT: 'Italy', JM: 'Jamaica', JP: 'Japan', JE: 'Jersey', JO: 'Jordan',
  KZ: 'Kazakhstan', KE: 'Kenya', KI: 'Kiribati', KR: 'Korea', KW: 'Kuwait', KG: 'Kyrgyzstan',
  LA: 'Lao People\'s Democratic Republic', LV: 'Latvia', LB: 'Lebanon', LS: 'Lesotho', LR: 'Liberia',
  LY: 'Libyan Arab Jamahiriya', LI: 'Liechtenstein', LT: 'Lithuania', LU: 'Luxembourg', MO: 'Macao',
  MK: 'Macedonia', MG: 'Madagascar', MW: 'Malawi', MY: 'Malaysia', MV: 'Maldives', ML: 'Mali', MT: 'Malta',
  MH: 'Marshall Islands', MQ: 'Martinique', MR: 'Mauritania', MU: 'Mauritius', YT: 'Mayotte', MX: 'Mexico',
  FM: 'Micronesia,  Federated States Of', MD: 'Moldova', MC: 'Monaco', MN: 'Mongolia', ME: 'Montenegro',
  MS: 'Montserrat', MA: 'Morocco', MZ: 'Mozambique', MM: 'Myanmar', NA: 'Namibia', NR: 'Nauru',
  NP: 'Nepal', NL: 'Netherlands', AN: 'Netherlands Antilles', NC: 'New Caledonia', NZ: 'New Zealand',
  NI: 'Nicaragua', NE: 'Niger', NG: 'Nigeria', NU: 'Niue', NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands', NO: 'Norway', OM: 'Oman', PK: 'Pakistan', PW: 'Palau',
  PS: 'Palestinian Territory,  Occupied', PA: 'Panama', PG: 'Papua New Guinea', PY: 'Paraguay', 
  PE: 'Peru', PH: 'Philippines', PN: 'Pitcairn', PL: 'Poland', PT: 'Portugal', PR: 'Puerto Rico',
  QA: 'Qatar', RE: 'Reunion', RO: 'Romania', RU: 'Russian Federation', RW: 'Rwanda',
  BL: 'Saint Barthelemy', SH: 'Saint Helena', KN: 'Saint Kitts And Nevis', LC: 'Saint Lucia',
  MF: 'Saint Martin', PM: 'Saint Pierre And Miquelon', VC: 'Saint Vincent And Grenadines',
  WS: 'Samoa', SM: 'San Marino', ST: 'Sao Tome And Principe', SA: 'Saudi Arabia', SN: 'Senegal',
  RS: 'Serbia', SC: 'Seychelles', SL: 'Sierra Leone', SG: 'Singapore', SK: 'Slovakia',
  SI: 'Slovenia', SB: 'Solomon Islands', SO: 'Somalia', ZA: 'South Africa',
  GS: 'South Georgia And Sandwich Isl.', ES: 'Spain', LK: 'Sri Lanka', SD: 'Sudan', SR: 'Suriname',
  SJ: 'Svalbard And Jan Mayen', SZ: 'Swaziland', SE: 'Sweden', CH: 'Switzerland',
  SY: 'Syrian Arab Republic', TW: 'Taiwan', TJ: 'Tajikistan', TZ: 'Tanzania', TH: 'Thailand',
  TL: 'Timor-Leste', TG: 'Togo', TK: 'Tokelau', TO: 'Tonga', TT: 'Trinidad And Tobago',
  TN: 'Tunisia', TR: 'Turkey', TM: 'Turkmenistan', TC: 'Turks And Caicos Islands', TV: 'Tuvalu',
  UG: 'Uganda', UA: 'Ukraine', AE: 'United Arab Emirates', GB: 'United Kingdom', US: 'United States',
  UM: 'United States Outlying Islands', UY: 'Uruguay', UZ: 'Uzbekistan', VU: 'Vanuatu', VE: 'Venezuela',
  VN: 'Viet Nam', VG: 'Virgin Islands,  British', VI: 'Virgin Islands,  U.S.', WF: 'Wallis And Futuna',
  EH: 'Western Sahara', YE: 'Yemen', ZM: 'Zambia', ZW: 'Zimbabwe'
}