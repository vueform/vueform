import { runElementTests } from 'test-helpers'

export default runElementTests('radiogroup', {
  default: {
    fieldType: 'radio',
    value: 1,
    value2: 2,
    default: 3,
    default2: 4,
    nullValue: null,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change'],
  // }
})