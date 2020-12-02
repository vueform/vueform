import { runElementTests } from 'test-helpers'

export default runElementTests('gallery', {
  default: {
    initial: 0,
    fileType: 'image',
    prototypes: [
      {
        auto: false,
        element: {
          type: 'image'
        }
      },
      {
        auto: false,
        object: {
          schema: {
            file: {
              type: 'image'
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