import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, check, uncheck } from 'test-helpers'

describe('Boolean Rule', () => {
  it('should check if value is "1" or "0"', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'boolean'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '0')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    change(a, '2')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'true')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'false')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })

  it('should check if value is true or false', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: true,
          falseValue: false,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if value is 1 or 0', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: 1,
          falseValue: 0,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)

    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if value boolean', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'boolean',
          trueValue: 2,
          falseValue: -1,
        }
      }
    })

    let a = findAllComponents(form, { name: 'CheckboxElement' }).at(0)

    check(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    uncheck(a)
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
  })
})