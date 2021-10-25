import { runElementTests } from 'test-helpers'

export default runElementTests('address', {
  default: {
    fieldType: 'input',
    default: { "address": "Amphitheatre Parkway 1600", "address2": null, "zip": "94043", "city": "Mountain View", "state": "CA", "country": "US" },
    default2: {"address":"Infinite Loop","address2":null,"zip":"95014","city":"Cupertino","state":"CA","country":"US"},
    value: {"address":"Deer Creek Road 3500","address2":null,"zip":"94304","city":"Palo Alto","state":"CA","country":"US"},
    value2: {"address":"Terry Avenue North 440","address2":null,"zip":"98109","city":"Seattle","state":"WA","country":"US"},
    nullValue: {
      address: null,
      address2: null,
      zip: null,
      city: null,
      state: null,
      country: null,
    },
    mockPlaces: true,
  },
  // events: {
  //   events: ['change']
  // }
})