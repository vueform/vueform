import { runElementTests } from 'test-helpers'

export default runElementTests('text', {
  default: {
    fieldType: 'input',
    default: 'default',
    default2: 'default2',
    value: 'value',
    value2: 'value2',
  },
  events: {
    events: ['change']
  }
})