import { runElementTests } from 'test-helpers'

export default runElementTests('trix', {
  default: {
    fieldType: 'trix',
    default: '<div>default</div>',
    default2: '<div>default2</div>',
    value: '<div>value</div>',
    value2: '<div>value2</div>',
  },
  events: {
    events: ['change', 'error']
  }
})