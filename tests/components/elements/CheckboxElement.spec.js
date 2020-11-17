import { runElementTests } from 'test-helpers'

export default runElementTests('checkbox', {
  default: {
    value: true,
    value2: false,
    fieldType: 'checkbox',
  },
  events: {
    events: ['change'],
  }
})