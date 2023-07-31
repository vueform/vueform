import { runElementTests } from 'test-helpers'

export default runElementTests('checkboxgroup', {
  default: {
    fieldType: 'checkbox',
    value: [1,2],
    value2: [3,4],
    default: [5,6],
    default2: [7,8],
    nullValue: [],
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change'],
  // }
})