import { testComputedOption } from 'test-helpers'

export default function floating (elementType) {
  return () => {
    testComputedOption(it, elementType, 'floating', null, 'floating')
  }
}