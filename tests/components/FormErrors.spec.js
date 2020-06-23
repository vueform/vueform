import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Form Errors', () => {
  it('should display all error messages', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    form.findComponent({ name: 'TextElement' }).vm.validate()

    LocalVue.nextTick(() => {
      let errors = form.findComponent({ name: 'FormErrors' })

      expect(errors.vm.errors.length).toBe(1)
      expect(errors.vm.errors.length).toBe(1)

      form.vm.messageBag.prepend('aaa')
      form.vm.messageBag.append('bbb')

      expect(errors.vm.errors.length).toBe(3)

      done()
    })
  })
})