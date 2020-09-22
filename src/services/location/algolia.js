export default class {
  constructor(el$) {
    this.el$ = el$
    this.places = null
  }

  init(options) {
    if (window.places === undefined) {
      throw new Error('Algolia Places API missing. Please include script in your project from https://community.algolia.com/places/documentation.html#cdn-script or install via npm and set to `window.places`.')
    }

    this.places = places(Object.assign({}, {
      container: this.el$.$refs.input,
    }, options))

    this.places.on('change', (e) => {
      let suggestion = e.suggestion

      this.el$.location = suggestion
      this.el$.model = this.formatValue(suggestion)
    })
  }

  destroy() {
    this.places.destroy()
  } 

  formatValue(value) {
    if (!value || !_.isPlainObject(value)) {
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

    if (_.values(states).indexOf(name) === -1) {
      return
    }

    return _.keys(states)[_.values(states).indexOf(name)]
  }
}