import { testPropDefault, destroy } from 'test-helpers'

export const displayKey = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'displayKey', 'formatted_address', 'address')
}