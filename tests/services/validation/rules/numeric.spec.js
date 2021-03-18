import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Numeric Rule', () => {
  it('should allow only number and float value', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '0')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '-1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '1.1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '-1.1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '3-')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '3aaa')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'aaa3')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '3 ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '1000')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '-1000')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '9999999999999')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '-9999999999999')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, 'asdfads')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '%%!+')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '0x1D306')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})