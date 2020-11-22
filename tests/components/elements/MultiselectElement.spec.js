import { runElementTests } from 'test-helpers'

export default runElementTests('multiselect', {
  default: {
    value: [1,2],
    value2: [],
    items: {
      1: 'value',
      2: 'value2',
      3: 'value3',
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