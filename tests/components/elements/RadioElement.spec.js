import { runElementTests } from 'test-helpers'

export default runElementTests('radio', {
  default: {
    value: 1,
    value2: null,
    fieldType: 'radio',
  },
  events: {
    events: ['change'],
  }
})