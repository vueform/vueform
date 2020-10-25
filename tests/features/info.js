import { testComputedOption } from 'test-helpers'

export default function info (elementType) {
  return () => {
    testComputedOption(it, elementType, 'info', false, 'info')
  }
}