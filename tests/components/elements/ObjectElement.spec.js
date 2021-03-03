import { runElementTests } from 'test-helpers'

export default runElementTests('object', {
  default: {
    default: { el: 'value', el2: 'value2' },
    default2: { el: 'value3', el2: 'value4' },
    value: { el: 'value5', el2: 'value6' },
    value2: { el: 'value7', el2: 'value8' },
    nullValue: {},
  },
  events: {
    events: ['change']
  }
})