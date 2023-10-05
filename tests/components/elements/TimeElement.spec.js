import { runElementTests } from 'test-helpers'

export default runElementTests('time', {
  default: {
    value: '23:59',
    value2: '2359',
    valueFormat: 'HH:mm',
    loadFormat: 'HH:mm',
    valueFormat2: 'HHmm',
    loadFormat2: 'HHmm',
    fieldType: 'input',
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})