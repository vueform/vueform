import { runElementTests } from 'test-helpers'

export default runElementTests('multifile', {
  default: {
    initial: 0,
    // prototypes: [{}],
    // childValues: [{ child: 'value{i}' }],
    // childNulls: [null, { child: null }],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})