import { runElementTests } from 'test-helpers'

export default runElementTests('multiselect', {
  default: {
    value: [1,2],
    value2: [],
    items: [
      { value: 1, label: 'value' },
      { value: 2, label: 'value3' },
      { value: 3, label: 'value2' },
    ],
    fieldType: 'select',
  },
  events: {
    events: [
      'change', 'select', 'deselect', 'searchChange',
      'open', 'close',
    ]
  }
})