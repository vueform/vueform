import flushPromises from 'flush-promises'
import { createForm } from 'test-helpers'

describe('Mimes Rule', () => {
  it('should only be valid if mimetype is correct', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'mimes:jpg,png',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.jpg'], 'file.jpg', {type:'image/jpeg'}))
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.gif'], 'file.gif', {type:'image/gif'}))
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if file value is not a file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'mimes:jpg,png',
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

  it('should not be valid if mimetype is not correct', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'text',
          rules: 'mimes:jpg,png',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(true)
  })
  
  it('should contain accepted mime types in error message', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'mimes:jpg,png',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.gif'], 'file.gif', {type:'image/gif'}))
    await flushPromises()
    expect(el.invalid).toBe(true)

    expect(el.error).toContain('jpg, png')
  })
})