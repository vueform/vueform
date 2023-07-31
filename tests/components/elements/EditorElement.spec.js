import { runElementTests } from 'test-helpers'

export default runElementTests('editor', {
  default: {
    fieldType: 'editor',
    default: '<div>default</div>',
    default2: '<div>default2</div>',
    value: '<div>value</div>',
    value2: '<div>value2</div>',
    nullValue: null,
    inputSelector: 'TrixEditor',
  },
  // events: {
  //   events: ['change', 'error']
  // }
})