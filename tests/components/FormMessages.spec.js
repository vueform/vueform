import { createForm } from 'test-helpers'
import { nextTick } from 'vue'
import useFormComponent from './../composables/useFormComponent'

describe('FormMessages', () => {
  useFormComponent({schema:{el:{type:'text',rules:'required'}}}, 'FormMessages', {
    execute: (el) => { el.form$.messageBag.append('Message', 'message') }
  })

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