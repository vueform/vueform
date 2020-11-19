import { runElementTests } from 'test-helpers'

export default runElementTests('dates', {
  default: {
    value: ['2020-12-25', '2020-12-30'],
    value2: [],
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})