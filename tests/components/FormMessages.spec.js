import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Form Messages', () => {
  it('should display all messages', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        }
      }
    })

    form.vm.messageBag.prepend('aaa', 'message')
    form.vm.messageBag.append('bbb', 'message')

    LocalVue.nextTick(() => {
      let messages = form.findComponent({ name: 'FormMessages' })

      expect(messages.vm.messages.length).toBe(2)
      expect(messages.vm.messages.length).toBe(2)

      done()
    })
  })
})