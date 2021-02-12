import { runElementTests } from 'test-helpers'

export default runElementTests('date', {
  default: {
    value: '2020-12-30',
    value2: '30-12-2020',
    loadFormat: 'YYYY-MM-DD',
    loadFormat2: 'DD-MM-YYYY',
    valueFormat: 'YYYY-MM-DD',
    valueFormat2: 'DD-MM-YYYY',
    fieldType: 'input',
  },
  events: {
    events: ['change']
  }
})