import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('Array Rule', () => {
  it('should be valid for an array', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)

    a.vm.validate()

    await flushPromises()

    expect(a.vm.invalid).toBe(false)
  })

  it('should be invalid for an string', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'array',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 'aaa')

    await flushPromises()

    expect(a.vm.invalid).toBe(true)
  })

  it('should be invalid for an number', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'array',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, 123)

    await flushPromises()

    expect(a.vm.invalid).toBe(true)
  })
})