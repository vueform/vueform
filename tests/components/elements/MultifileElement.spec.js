import { runElementTests } from 'test-helpers'

export default runElementTests('multifile', {
  default: {
    initial: 0,
    prototypes: [
      {
        type: 'multifile',
        auto: false,
      },
      {
        type: 'multifile',
        auto: false,
        object: true,
      }
    ],
    childValues: [
      new File([''], 'filename{i}.jpg'),
      { file: new File([''], 'filename{i}.jpg') }
    ],
    childNulls: [null, { file: null }],

    // The name of the child input when object
    childName: 'file',

    elementType: 'multifile',

    value: [],
    default: [],
  },
  events: {
    events: ['change', 'add', 'remove', 'sort']
  }
})