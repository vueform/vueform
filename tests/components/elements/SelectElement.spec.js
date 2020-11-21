import { runElementTests } from 'test-helpers'

export default runElementTests('select', {
  default: {
    value: 1,
    value2: null,
    items: {
      1: 'value',
      2: 'value2',
    },
    fieldType: 'select',
  },
  events: {
    events: [
      'change', 'select', 'deselect', 'searchChange',
      'open', 'close',
    ]
  }
})