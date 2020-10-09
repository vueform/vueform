import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change } from './.test-helpers'

describe('Array Rule', () => {
  it('should be valid for an array', (done) => {
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

    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should be invalid for an string', (done) => {
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

    expect(a.vm.invalid).toBe(true)

    done()
  })

  it('should be invalid for an number', (done) => {
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

    expect(a.vm.invalid).toBe(true)

    done()
  })
})