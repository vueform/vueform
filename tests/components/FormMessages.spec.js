import { createForm } from 'test-helpers'
import { nextTick } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

describe('FormMessages', () => {
  describe('rendering', () => {
    it('should display all messages', async () => {
      let form = createForm({
        schema: {
          a: {
            type: 'text',
          }
        }
      })

      form.vm.messageBag.prepend('aaa', 'message')
      form.vm.messageBag.append('bbb', 'message')

      await nextTick()

      let messages = form.findComponent({ name: 'FormMessages' })

      expect(messages.vm.messages.length).toBe(2)
      expect(messages.vm.messages.length).toBe(2)
    })
  })
})