import { runElementTests } from 'test-helpers'

export default runElementTests('text', {
  default: {
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})