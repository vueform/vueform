import { runElementTests } from 'test-helpers'

export default runElementTests('text', {
  default: {
    fieldType: 'input',
    default: 'default',
    default2: 'default2',
    formattedValue: 'value-custom-formatted',
    value: 'value',
    value2: 'value2',
    nullValue: null,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})