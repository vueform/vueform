import { runElementTests } from 'test-helpers'

export default runElementTests('slider', {
  default: {
    value: 5,
    value2: 10,
    default: 0
  },
  events: {
    events: ['change']
  }
})