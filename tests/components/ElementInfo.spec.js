import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementInfo', () => {
  useElementComponent('text', 'ElementInfo', { info: 'info', label: 'label' })

  describe('rendering', () => {
    it('should render', () => {
      let info = 'info'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            label: 'label',
            info,
          }
        }
      })

      let Info = form.findComponent({ name: 'ElementInfo' })

      expect(Info.html()).toContain(info)
    })
  })
})