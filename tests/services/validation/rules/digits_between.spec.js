import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Digits Between Rule', () => {
  it('should validate if digits length is between min & max', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'digits_between:2,7'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '12')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '123')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '1234567')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '12345678')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'aa')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '  ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '0x1D306')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})