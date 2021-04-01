import { testPropDefault, destroy } from 'test-helpers'

export const storeOrder = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'storeOrder', null, 'order')
}