import { runElementTests } from 'test-helpers'

export default runElementTests('checkboxgroup', {
  default: {
    value: ['1','2'],
    value2: [],
    fieldType: 'checkbox',
    default: []
  },
  events: {
    events: ['change'],
  }
})