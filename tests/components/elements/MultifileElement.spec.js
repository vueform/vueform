import { runElementTests } from 'test-helpers'

export default runElementTests('multifile', {
  default: {
    initial: 0,
    prototypes: [
      {
        auto: false,
        element: {
          type: 'file'
        }
      },
      {
        auto: false,
        object: {
          schema: {
            file: {
              type: 'file'
            }
          }
        },
      }
    ],
    childValues: [
      new File([''], 'filename{i}.jpg'),
      { file: new File([''], 'filename{i}.jpg') }
    ],
    childNulls: [null, { file: null }],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})