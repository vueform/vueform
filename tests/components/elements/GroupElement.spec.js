import { runElementTests } from 'test-helpers'

export default runElementTests('group', {
  slots: {
    slots: [
      'label', 'info', 'description', 'message',
      'before', 'between', 'after'
    ]
  }
})