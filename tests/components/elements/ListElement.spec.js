import { runElementTests } from 'test-helpers'

export default runElementTests('list', {
  default: {
    initial: 1,
    prototypes: [
      {
        element: {
          type: 'text'
        }
      },
      {
        object: {
          schema: {
            child: {
              type: 'text'
            }
          }
        }
      },
    ],
    childValues: ['value{i}', { child: 'value{i}' }],
    childNulls: [null, { child: null }],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})