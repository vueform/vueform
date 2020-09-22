export default class {
  constructor(el$) {
    this.el$ = el$
    this.autocomplete = null
    this.autocompleteListener = null
  }

  init(options) {
    if (window.google === undefined || window.google.maps === undefined || window.google.maps.places === undefined || window.google.maps.places.Autocomplete === undefined) {
      throw new Error('Google Places API missing. Please include script from https://developers.google.com/maps/documentation/javascript/places-autocomplete#loading-the-library.')
    }

    this.autocomplete = new google.maps.places.Autocomplete(this.el$.$refs.input, options)

    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace()

      this.el$.location = place
      this.el$.model = this.formatValue(place)
    })
  }

  destroy() {
    google.maps.event.removeListener(this.autocompleteListener)
    google.maps.event.clearInstanceListeners(this.autocomplete)
    $(".pac-container").remove()
  } 

  formatValue(value) {
    if (!value || !_.isPlainObject(value)) {
      return value
    }

    let addressComponents = value.address_components

    let street = this.addressComponent(addressComponents, 'street')
    let streetNumber = this.addressComponent(addressComponents, 'street_number')

    return {
      country: this.addressComponent(addressComponents, 'country'),
      country_code: this.addressComponent(addressComponents, 'country_code'),
      state: this.addressComponent(addressComponents, 'state'),
      state_code: this.addressComponent(addressComponents, 'state_code'),
      city: this.addressComponent(addressComponents, 'city'),
      zip: this.addressComponent(addressComponents, 'zip'),
      address: street !== null ? `${street} ${streetNumber}` : null,
      formatted_address: value.formatted_address,
      lat: value.geometry.location.lat(),
      lng: value.geometry.location.lng(),
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

    _.each(addressComponents, (component) => {
      if (component.types.indexOf(typeMap[type].field) !== -1) {
        if (['state', 'state_code'].indexOf(type) !== -1 && this.addressComponent(addressComponents, 'country_code') != 'US') {
          return 
        }

        addressComponent = component[typeMap[type].type]
      }
    })

    return addressComponent
  }
}