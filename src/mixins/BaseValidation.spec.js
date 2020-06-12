import { createForm } from './../utils/testHelpers'

describe('Base Validation', () => {
  it('should be pending if an async validation is in progress', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'unique'
        }
      }
    })

    let a = form.findComponent({ name: 'TextElement' })

    a.vm.update(1, true)

    expect(form.vm.pending).toBe(true)
  })
})