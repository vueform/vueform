import { runElementTests } from 'test-helpers'

export default runElementTests('file', {
  default: {
    fieldType: 'input',
    default: 'filename.jpg',
    default2: new File([''], 'filename2.jpg'),
    value: new File([''], 'filename3.jpg'),
    value2: { tmp: 'asdf123', originalName: 'filename4.jpg' },
    nullValue: null,
    inputSelector: 'div[aria-placeholder="Select file"]',
  },
  // events: {
  //   events: ['change', 'remove', 'error']
  // }
})