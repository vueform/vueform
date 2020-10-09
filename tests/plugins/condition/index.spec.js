import { createForm, findAllComponents } from 'test-helpers'

describe('Condition Plugin', () => {
  it('should not be `available` if conditions aren\'t met', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text',
          conditions: [
            ['name', 'a']
          ]
        }
      }
    })

    expect(findAllComponents(form, { name: 'TextElement' }).at(1).vm.available).toBe(false)
  })

  it('should be `available` if has no conditions', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text',
        }
      }
    })

    expect(findAllComponents(form, { name: 'TextElement' }).at(1).vm.available).toBe(true)
  })
})