import { testPropDefault } from 'test-helpers'

export const items = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'items', {}, {1: 'value', 2: 'value2'})
}