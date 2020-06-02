import { createForm } from './../../utils/testHelpers'

describe('Element condition', () => {
  it('should not be available if conditions aren\'t met', () => {
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

    expect(form.findAllComponents({ name: 'TextElement' }).at(1).vm.available).toBe(false)
  })
})