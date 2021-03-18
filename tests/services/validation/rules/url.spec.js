import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('URL Rule', () => {
  it('should validate url', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'url',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'http://www.laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'http://laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.laraform.ioasdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'www.laraform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})