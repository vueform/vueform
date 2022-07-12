import flushPromises from 'flush-promises'
import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'vue'

describe('ElementMessage', () => {
  useElementComponent('text', 'ElementMessage', { }, {
    execute: (el) => { el.messageBag.append('message', 'message') }
  })

  describe('rendering', () => {
    it('should render message', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          }
        }
      })
      
      let el = form.vm.el$('el')

      el.messageBag.append('message', 'message')

      await flushPromises()
      await nextTick()

      let Message = form.findComponent({ name: 'ElementMessage' })

      expect(Message.html()).toContain('message')
    })
  })
})