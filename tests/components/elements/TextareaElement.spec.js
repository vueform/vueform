import { runElementTests } from 'test-helpers'

export default runElementTests('textarea', {
  default: {
    fieldType: 'textarea',
    default: 'default',
    default2: 'default2',
    value: 'value',
    value2: 'value2',
    nullValue: null,
    inputSelector: 'textarea',
  },
  // events: {
  //   events: ['change'],
  // }
})