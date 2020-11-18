import { runElementTests } from 'test-helpers'

export default runElementTests('password', {
  default: {
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})