import { createForm } from './../../utils/testHelpers'

describe('Element', () => {
  it('should add `class` option to main class list', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          class: 'a'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).classes()).toContain('a')
  })
})