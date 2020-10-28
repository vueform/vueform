import { testComputedOption } from 'test-helpers'

export default function default_ (elementType) {

  return () => {
    testComputedOption(it, elementType, 'default', null, 'value')
  }
}