import { runElementTests } from 'test-helpers'

export default runElementTests('toggle', {
  default: {
    value: true,
    value2: false,
  },
  events: {
    events: ['change'],
  }
})