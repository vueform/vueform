import { runElementTests } from 'test-helpers'

export default runElementTests('toggle', {
  default: {
    value: true,
    value2: false,
    default: false,
  },
  events: {
    events: ['change'],
  }
})