import { runElementTests } from 'test-helpers'

export default runElementTests('dates', {
  default: {
    fieldType: 'dates',
    value: ['2020-12-24', '2020-12-25'],
    value2: ['2020-12-26', '2020-12-27'],
    default: ['2020-12-28', '2020-12-29'],
    default2: ['2020-12-30', '2020-12-31'],
    nullValue: [],
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})