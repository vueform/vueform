import { runElementTests } from 'test-helpers'

export default runElementTests('textarea', {
  default: {
    fieldType: 'textarea',
  },
  events: {
    events: ['change'],
  }
})