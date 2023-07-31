import { runElementTests } from 'test-helpers'

export default runElementTests('location', {
  default: {
    fieldType: 'input',
    default: { "country": "United States", "country_code": "US", "state": "California", "state_code": "CA", "city": "Mountain View", "zip": "94043", "address": "Amphitheatre Parkway 1600", "formatted_address": "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA", "lat": 37.4222934, "lng": -122.0841409 },
    default2: { "country": "United States", "country_code": "US", "state": "California", "state_code": "CA", "city": "Cupertino", "zip": "95014", "address": "Infinite Loop One", "formatted_address": "One Infinite Loop, Cupertino, CA 95014, USA", "lat": 37.3316756, "lng": -122.030189 },
    value: { "country": "United States", "country_code": "US", "state": "California", "state_code": "CA", "city": "Palo Alto", "zip": "94304", "address": "Deer Creek Road 3500", "formatted_address": "3500 Deer Creek Rd, Palo Alto, CA 94304, USA", "lat": 37.3948376, "lng": -122.1503889 },
    value2: { "country": "United States", "country_code": "US", "state": "Washington", "state_code": "WA", "city": "Seattle", "zip": "98109", "address": "Terry Avenue North 440", "formatted_address": "440 Terry Ave N, Seattle, WA 98109, USA", "lat": 47.6228971, "lng": -122.3369241 },
    nullValue: {
      country: null,
      country_code: null,
      state: null,
      state_code: null,
      city: null,
      zip: null,
      address: null,
      formatted_address: null,
      lat: null,
      lng: null
    },
    mockPlaces: true,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})