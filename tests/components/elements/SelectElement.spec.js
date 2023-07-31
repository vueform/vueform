import { runElementTests } from 'test-helpers'

export default runElementTests('select', {
  default: {
    fieldType: 'select',
    default: 1,
    default2: 2,
    value: 3,
    value2: 4,
    items: [1,2,3,4,5,6],
    nullValue: null,
    inputSelector: 'select',
  },
  // events: {
  //   events: [
  //     'change', 'select', 'deselect', 'searchChange',
  //     'open', 'close',
  //   ]
  // }
})