import { runElementTests } from 'test-helpers'

export default runElementTests('list', {
  default: {
    initial: 1,
    prototypes: [
      {
        type: 'list',
        element: {
          type: 'text'
        }
      },
      {
        type: 'list',
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

    // The name of the child input when object
    childName: 'child',

    elementType: 'list',

    default: [],
    value: [],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})