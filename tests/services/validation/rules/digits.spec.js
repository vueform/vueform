import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Digits Rule', () => {
  it('should match exact length of digits', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'digits:2'
        },
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    change(a, '0')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '5')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '00')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '01')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '11')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '111')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'aa')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '  ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})