import { runElementTests } from 'test-helpers'

export default runElementTests('slider', {
  default: {
    fieldType: 'slider',
    default: 5,
    default2: 10,
    value: 20,
    value2: 30,
    nullValue: 0,
    inputSelector: '.cursor-grab',
  },
  // events: {
  //   events: ['change']
  // }
})