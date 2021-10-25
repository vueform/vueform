import { runElementTests } from 'test-helpers'

export default runElementTests('hidden', {
  default: {
    fieldType: 'input',
    default: 'default',
    default2: 'default2',
    value: 'value',
    value2: 'value2',
    nullValue: null,
  },
  // events: {
  //   events: ['change']
  // }
})