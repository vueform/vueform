import { runElementTests } from 'test-helpers'

export default runElementTests('dates', {
  default: {
    value: ['2020-12-30', '2020-12-25'],
    value2: ['30-12-2020', '25-12-2020'],
    valueFormat: 'YYYY-MM-DD',
    loadFormat: 'YYYY-MM-DD',
    valueFormat2: 'DD-MM-YYYY',
    loadFormat2: 'DD-MM-YYYY',
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})