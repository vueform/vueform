import { runElementTests } from 'test-helpers'

export default runElementTests('location', {
  default: {
    mockPlaces: true,
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})