import { testComputedOption } from 'test-helpers'

export default function autocomplete(elementType) {
  return () => {
    testComputedOption(it, elementType, 'autocomplete', false, 'on')
  }
}