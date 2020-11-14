import { runElementTests } from 'test-helpers'

export default runElementTests('hidden', {
  events: {
    events: ['change']
  }
})