import { runElementTests } from 'test-helpers'

export default runElementTests('trix', {
  default: {
    fieldType: 'trix',
  },
  events: {
    events: ['change', 'error']
  }
})