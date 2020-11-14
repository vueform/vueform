import { runElementTests } from 'test-helpers'

export default runElementTests('tTextarea', {
  default: {
    fieldType: 'textarea',
  },
  events: {
    events: ['change']
  }
})