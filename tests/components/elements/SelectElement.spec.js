import { runElementTests } from 'test-helpers'

export default runElementTests('select', {
  default: {
    value: 1,
    value2: null,
    items: ['value','value2','value3'],
    fieldType: 'select',
  },
  events: {
    events: [
      'change', 'select', 'deselect', 'searchChange',
      'open', 'close',
    ]
  }
})