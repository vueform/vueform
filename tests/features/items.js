import { testComputedOption } from 'test-helpers'

export const items = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'items', {}, {1: 'value', 2: 'value2'})
}