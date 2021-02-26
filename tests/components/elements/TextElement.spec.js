import { runElementTests } from 'test-helpers'

export default runElementTests('text', {
  default: {
    fieldType: 'input',
    default: 'default',
    value: 'value',
    value2: 'value2',
  },
  events: {
    events: ['change']
  }
})