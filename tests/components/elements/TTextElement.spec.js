import { runElementTests } from 'test-helpers'

export default runElementTests('tText', {
  default: {
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})