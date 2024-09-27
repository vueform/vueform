import { runElementTests } from 'test-helpers'

export default runElementTests('matrix', {
  default: {
    default: { red: 'apple', green: 'pear', blue: 'orange' },
    default2: { red: 'pear', green: null, blue: 'apple' },
  },
  // events: {
  //   events: ['change']
  // }
})