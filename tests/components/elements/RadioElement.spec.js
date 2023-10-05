import { runElementTests } from 'test-helpers'

export default runElementTests('radio', {
  default: {
    fieldType: 'radio',
    value: 1,
    value2: null,
    default: null,
    default2: null,
    nullValue: null,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change'],
  // }
})