import { testComputedOption } from 'test-helpers'

export const trueValue = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'trueValue', true, 'on')
}

export const falseValue = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'falseValue', false, 'off')
}