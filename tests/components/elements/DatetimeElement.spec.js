import { runElementTests } from 'test-helpers'

export default runElementTests('datetime', {
  default: {
    value: '2020-12-30 23:59',
    value2: null,
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})