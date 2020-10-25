import { testComputedOption } from 'test-helpers'

export default function(elementType) {
  return () => {
    testComputedOption(it, elementType, 'readonly', false, true)
  }
}