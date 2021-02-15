import { runElementTests } from 'test-helpers'

export default runElementTests('multifile', {
  default: {
    initial: 0,
    fileType: 'file',
    childName: 'file',
    prototypes: [
      {
        auto: false,
        // Required because of tests
        // element: {
        //   type: 'file'
        // }
      },
      {
        auto: false,
        // Required because of tests
        object: true,
        // object: {
        //   schema: {
        //     file: {
        //       type: 'file'
        //     }
        //   }
        // },
      }
    ],
    childValues: [
      new File([''], 'filename{i}.jpg'),
      { file: new File([''], 'filename{i}.jpg') }
    ],
    childNulls: [null, { file: null }],
    value: [],
    default: [],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})