import { runElementTests } from 'test-helpers'

export default runElementTests('tTrix', {
  default: {
    fieldType: 'trix',
    default: {en:'<div>default-en</div>',fr:'<div>default-fr</div>'},
    default2: {en:'<div>default2-en</div>',fr:'<div>default2-fr</div>'},
    value: {en:'<div>value-en</div>',fr:'<div>value-fr</div>'},
    value2: {en:'<div>value2-en</div>',fr:'<div>value2-fr</div>'},
    nullValue: {en:null,fr:null},
  },
  events: {
    events: ['change', 'error']
  }
})