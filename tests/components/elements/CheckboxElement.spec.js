import { runElementTests } from 'test-helpers'

export default runElementTests('checkbox', {
  default: {
    fieldType: 'checkbox',
    value: true,
    value2: false,
    default: false,
    default2: false,
    nullValue: false,
    inputSelector: 'input',
  },
  // events: {
  //   events: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  // }
})