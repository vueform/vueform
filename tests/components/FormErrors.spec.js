import { createForm } from 'test-helpers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

describe('Form Errors', () => {
  it('should display all error messages', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'required'
        }
      }
    })

    form.findComponent({ name: 'TextElement' }).vm.validate()

    await flushPromises()
    await nextTick()

    let errors = form.findComponent({ name: 'FormErrors' })

    expect(errors.html()).toContain(form.vm.el$('a').Validators[0].message)
    expect(errors.vm.errors.length).toBe(1)
    expect(errors.vm.errors.length).toBe(1)

    form.vm.messageBag.prepend('aaa')
    form.vm.messageBag.append('bbb')

    expect(errors.vm.errors.length).toBe(3)
  })
})