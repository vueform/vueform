import { runElementTests } from 'test-helpers'

export default runElementTests('radiogroup', {
  default: {
    value: 1,
    value2: null,
    fieldType: 'radio',
  },
  events: {
    events: ['change'],
  }
})