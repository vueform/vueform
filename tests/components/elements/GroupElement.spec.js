import { runElementTests } from 'test-helpers'

export default runElementTests('group', {
  default: {
    default: { child: null, child2: 'value2', child3: 'value3', child4: 'value4',  },
    default2: { child: 'value5', child2: null, child3: 'value7', child4: 'value8', },
    value: { child: 'value9', child2: 'value10', child3: 'value11', child4: 'value12',  },
    value2: { child: 'value13', child2: 'value14', child3: 'value15', child4: 'value16',  },
    nullValue: { child: null, child2: null, child3: null, child4: null, },
  },
  // events: {
  //   events: ['change']
  // },
})