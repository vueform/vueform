import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementText', () => {
  useElementComponent('text', 'ElementText', { before: 'before' })

  describe('rendering', () => {
    it('should render', () => {
      let before = 'before'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            before,
          }
        }
      })

      let Text = form.findComponent({ name: 'ElementText' })

      expect(Text.html()).toContain(before)
    })
  })
})