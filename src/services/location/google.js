import each from 'lodash/each'
import isPlainObject from 'lodash/isPlainObject'

export default class {
  constructor() {
    this.autocomplete = null
    this.autocompleteListener = null
    this.options = {}
  }

  init(container, onChange, options) {
    if (window.google === undefined || window.google.maps === undefined || window.google.maps.places === undefined || window.google.maps.places.Autocomplete === undefined) {
      // throw new Error('Google Places API missing. Please include script from https://developers.google.com/maps/documentation/javascript/places-autocomplete#loading-the-library.')
    }

    this.options = options

    this.autocomplete = new window.google.maps.places.Autocomplete(container, options)

    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace()
      
      onChange(this.formatValue(place), place)
    })
  }

  destroy() {
    window.google.maps.event.removeListener(this.autocompleteListener)
    window.google.maps.event.clearInstanceListeners(this.autocomplete)

    let pac = document.querySelector('.pac-container')

    if (pac) {
      pac.remove()
    }
  }

  formatValue(value) {
    if (!isPlainObject(value)) {
      return value
    }

    let addressComponents = value.address_components

    let street = this.addressComponent(addressComponents, 'street')
    let streetNumber = this.addressComponent(addressComponents, 'street_number')

    let address = null

    if (street !== null) {
      address = street
    }

    if (streetNumber !== null) {
      address += (street !== null ? ' ' : '') + streetNumber
    }

    return {
      country: this.addressComponent(addressComponents, 'country'),
      country_code: this.addressComponent(addressComponents, 'country_code'),
      state: this.addressComponent(addressComponents, 'state'),
      state_code: this.addressComponent(addressComponents, 'state_code'),
      city: this.addressComponent(addressComponents, 'city'),
      zip: this.addressComponent(addressComponents, 'zip'),
      address: address,
      formatted_address: value.formatted_address || null,
      lat: value.geometry.location.lat() || null,
      lng: value.geometry.location.lng() || null,
    }
  }

  addressComponent(addressComponents, type) {
    let typeMap = {
      country: { field: 'country', type: 'long_name' },
      country_code: { field: 'country', type: 'short_name' },
      state: { field: 'administrative_area_level_1', type: 'long_name' },
      state_code: { field: 'administrative_area_level_1', type: 'short_name' },
      city: { field: 'locality', type: 'long_name' },
      zip: { field: 'postal_code', type: 'long_name' },
      street: { field: 'route', type: 'long_name' },
      street_number: { field: 'street_number', type: 'long_name' },
    }

    let addressComponent = null

    each(addressComponents, (component) => {
      if (component.types.indexOf(typeMap[type].field) !== -1) {
        if (['state', 'state_code'].indexOf(type) !== -1 && this.addressComponent(addressComponents, 'country_code') != 'US') {
          return 
        }

        addressComponent = component[typeMap[type].type] || null
      }
    })

    return addressComponent
  }
}