import { runElementTests } from 'test-helpers'

export default runElementTests('datetime', {
  default: {
    value: '2020-12-30 23:59',
    value2: "30-12-2020 23:59",
    valueFormat: 'YYYY-MM-DD HH:mm',
    loadFormat: 'YYYY-MM-DD HH:mm',
    valueFormat2: 'DD-MM-YYYY HH:mm',
    loadFormat2: 'DD-MM-YYYY HH:mm',
    fieldType: 'input',
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change']
  // }
})