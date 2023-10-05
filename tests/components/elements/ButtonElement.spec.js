import { runElementTests } from 'test-helpers'

export default runElementTests('button', {
  inputSelector: 'button',
  // events: {
  //   events: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted']
  // }
})