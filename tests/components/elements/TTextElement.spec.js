import { runElementTests } from 'test-helpers'

export default runElementTests('tText', {
  default: {
    fieldType: 'input',
    default: {en:'default-en',fr:'default-fr'},
    default2: {en:'default2-en',fr:'default2-fr'},
    value: {en:'value-en',fr:'value-fr'},
    value2: {en:'value2-en',fr:'value2-fr'},
    nullValue: {en:null,fr:null},
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})