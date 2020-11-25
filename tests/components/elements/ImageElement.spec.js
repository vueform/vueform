import { runElementTests } from 'test-helpers'

export default runElementTests('image', {
  default: {
    value: 'value',
    value2: new File([''], 'filename.jpg'),
    fieldType: 'input',
  },
  events: {
    events: ['change', 'remove', 'error']
  }
})