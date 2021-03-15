import { createForm, findAllComponents, change, check, uncheck } from 'test-helpers'
import flushPromises from 'flush-promises'

describe('Accepted Rule', () => {
  it('should be true for "true", "yes", "on", "1"', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'accepted',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'true')
    expect(a.vm.invalid).toBe(false)

    change(a, 'yes')
    expect(a.vm.invalid).toBe(false)

    change(a, 'on')
    expect(a.vm.invalid).toBe(false)

    change(a, '1')
    expect(a.vm.invalid).toBe(false)
  })

  it('should be true for true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'accepted',
          trueValue: true,
          falseValue: false,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })

  it('should be true for 1', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'accepted',
          trueValue: 1,
          falseValue: 0,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })

  it('should be false for not allowed values', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'accepted',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '0')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '2')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '-1')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'ueicbksjdhd')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '!"£%%^^^&')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '0.1')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '0,1')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'null')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, '""')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, ' ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'NaN')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, 'undefined')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})