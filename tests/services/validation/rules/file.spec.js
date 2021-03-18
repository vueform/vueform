import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('File Rule', () => {
  it('should be valid if value is file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'file',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['filename.jpg'], 'filename.jpg'))
    await flushPromises()
    expect(el.invalid).toBe(false)
  })

  it('should be valid if file value is not a file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'file',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update({ tmp: 'asdf1234.jpg', originalName: 'filename.jpg' })
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update('filename.jpg')
    await flushPromises()
    expect(el.invalid).toBe(false)
  })

  it('should not be valid if value is not file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'text',
          rules: 'file',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(true)

    el.update('filename.jpg')
    await flushPromises()
    expect(el.invalid).toBe(true)
  })
})