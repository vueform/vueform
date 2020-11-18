import { runElementTests } from 'test-helpers'

export default runElementTests('trix', {
  events: {
    events: ['change', 'error']
  }
})