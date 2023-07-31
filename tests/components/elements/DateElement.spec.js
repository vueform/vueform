import { runElementTests } from 'test-helpers'

export default runElementTests('date', {
  default: {
    fieldType: 'date',
    default: '2020-12-24',
    default2: '2020-12-25',
    value: '2020-12-26',
    value2: '2020-12-27',
    nullValue: null,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})