import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

describe('In Array Rule', () => {
  it('should check if a value exists in an other elements array of values', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'in_array:b.*'
        },
        b: {
          type: 'list',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    let b = findAllComponents(form, { name: 'ListElement' }).at(0)

    a.get('input').setValue('aaa')
    a.get('input').trigger('input')

    await flushPromises()

    expect(a.vm.invalid).toBe(true)

    b.vm.add('aaa')

    await flushPromises()

    expect(a.vm.invalid).toBe(false)
  })
})