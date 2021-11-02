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

    change(a, 'http://www.vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'http://vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.vueform.ioasdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'www.vueform.io')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})