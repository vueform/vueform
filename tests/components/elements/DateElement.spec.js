import { runElementTests } from 'test-helpers'

export default runElementTests('date', {
  default: {
    value: '2020-12-30',
    value2: null,
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})