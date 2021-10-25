import { runElementTests } from 'test-helpers'

export default runElementTests('object', {
  default: {
    default: { child: null, child2: 'value2' },
    default2: { child: 'value3', child2: null },
    value: { child: 'value5', child2: 'value6' },
    value2: { child: 'value7', child2: 'value8' },
    nullValue: { child: null, child2: null },
  },
  // events: {
  //   events: ['change']
  // }
})