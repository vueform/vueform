import isPlainObject from 'lodash/isPlainObject'
import values from 'lodash/values'
import keys from 'lodash/keys'

export default class {
  constructor() {
    this.places = null
    this.options = {}
  }

  init(container, onChange, options) {
    if (window.places === undefined) {
      throw new Error('Algolia Places API missing. Please include script in your project from https://community.algolia.com/places/documentation.html#cdn-script or install via npm and set to `window.places`.')
    }

    this.options = options

    this.places = window.places(Object.assign({}, {
      container,
    }, options))

    this.places.on('change', (e) => {
      onChange(this.formatValue(e.suggestion), e.suggestion)
    })
  }
  
  destroy() {
    this.places.destroy()
  } 

  formatValue(value) {
    if (!isPlainObject(value)) {
      return value
    }

    return {
      country: value.country,
      country_code: value.countryCode ? value.countryCode.toUpperCase() : null,
      state: value.countryCode == 'us' ? value.administrative : null,
      state_code: value.countryCode == 'us' ? this.stateCode(value.administrative.toLowerCase()) : null,
      city: value.city,
      zip: value.postcode,
      address: value.name,
      formatted_address: value.value,
      lat: value.latlng.lat,
      lng: value.latlng.lng,
    }
  }

  stateCode(name) {
    let states = {
      AL: 'alabama', AK: 'alaska', AZ: 'arizona', AR: 'arkansas', CA: 'california', CO: 'colorado',
      CT: 'connecticut', DE: 'delaware', DC: 'district of columbia', FL: 'florida', GA: 'georgia',
      HI: 'hawaii', ID: 'idaho', IL: 'illinois', IN: 'indiana', IA: 'iowa', KS: 'kansas', KY: 'kentucky',
      LA: 'louisiana', ME: 'maine', MD: 'maryland', MA: 'massachusetts', MI: 'michigan', MN: 'minnesota',
      MS: 'mississippi', MO: 'missouri', MT: 'montana', NE: 'nebraska', NV: 'nevada', NH: 'new hampshire',
      NJ: 'new Jersey', NM: 'new Mexico', NY: 'new york', NC: 'north carolina', ND: 'north dakota',
      OH: 'ohio', OK: 'oklahoma', OR: 'oregon', PA: 'pennsylvania', RI: 'rhode Island', SC: 'south carolina',
      SD: 'south dakota', TN: 'tennessee', TX: 'texas', UT: 'utah', VT: 'vermont', VA: 'virginia',
      WA: 'washington', WV: 'west virginia', WI: 'wisconsin', WY: 'wyoming'
    }

    if (values(states).indexOf(name) === -1) {
      return null
    }

    return keys(states)[values(states).indexOf(name)]
  }
}