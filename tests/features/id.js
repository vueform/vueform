import { testComputedOption } from 'test-helpers'

export default function id (elementType) {
  return () => {
    testComputedOption(it, elementType, 'id', elementType, 'my-id')
  }
}