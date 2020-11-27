import { testComputedOption } from 'test-helpers'

export const required = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'required', false, true)
}