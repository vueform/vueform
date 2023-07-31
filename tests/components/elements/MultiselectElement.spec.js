import { runElementTests } from 'test-helpers'

export default runElementTests('multiselect', {
  default: {
    fieldType: 'select',
    default: [0],
    default2: [1],
    value: [2,3],
    value2: [4,5],
    items: [1,2,3,4,5,6],
    nullValue: [],
    inputSelector: 'input',
  },
  // events: {
  //   events: [
  //     'change', 'select', 'deselect', 'searchChange',
  //     'open', 'close',
  //   ]
  // }
})