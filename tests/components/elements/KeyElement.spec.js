import { runElementTests } from 'test-helpers'

export default runElementTests('key', {
  events: {
    events: ['change']
  }
})