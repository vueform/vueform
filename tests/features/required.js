import { testPropDefault, destroy } from 'test-helpers'

export const required = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'required', false, true)
}