import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const autogrow = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'autogrow', true, false)
}