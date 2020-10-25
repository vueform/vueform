import { testComputedOption } from 'test-helpers'

export default function placeholder (elementType) {
  return () => {
    testComputedOption(it, elementType, 'placeholder', null, 'Placeholder')
  }
}