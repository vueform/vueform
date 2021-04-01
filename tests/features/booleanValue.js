import { testPropDefault, destroy } from 'test-helpers'

export const trueValue = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'trueValue', true, 'on')
}

export const falseValue = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'falseValue', false, 'off')
}