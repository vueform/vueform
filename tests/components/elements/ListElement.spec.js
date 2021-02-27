import { runElementTests } from 'test-helpers'

export default runElementTests('list', {
  default: {
    value: [1,2,3],
    value2: [4,5,6],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})