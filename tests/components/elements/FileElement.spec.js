import { runElementTests } from 'test-helpers'

export default runElementTests('file', {
  default: {
    value: 'value',
    value2: new File([''], 'filename.jpg'),
    fieldType: 'input',
  },
  events: {
    events: ['change', 'remove', 'error']
  }
})