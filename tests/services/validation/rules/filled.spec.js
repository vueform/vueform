import { createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances, check, uncheck } from 'test-helpers'

describe('Filled Rule', () => {
  it('should be validate if value is filled for string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'filled'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    change(a, ' ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '    ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'null')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, '.')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should be validate if value is filled for array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'filled',
          initial: 0,
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)

    setInstances(a, 0)

    a.vm.validate()

    await flushPromises()
    expect(a.vm.invalid).toBe(true)

    setInstances(a, 1)

    a.vm.validate()
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should be validate if value is filled for checkbox', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'checkbox',
          rules: 'filled',
          trueValue: null,
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
    expect(a.vm.invalid).toBe(true)
  })
})