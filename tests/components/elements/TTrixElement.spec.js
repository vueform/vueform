import { runElementTests } from 'test-helpers'

export default runElementTests('tTrix', {
  default: {
    fieldType: 'trix',
  },
  events: {
    events: ['change', 'error']
  }
})