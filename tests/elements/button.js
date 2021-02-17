import { createForm, findAll } from 'test-helpers'

export const rendering = function (elementType, elementName, options) {
  it('should render button when type is button', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'button'
        }
      }
    })

    expect(findAll(form, 'button').length).toBe(1)
    expect(findAll(form, 'a').length).toBe(0)
  })

  it('should render a when type is anchor', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor'
        }
      }
    })

    expect(findAll(form, 'button').length).toBe(0)
    expect(findAll(form, 'a').length).toBe(1)
  })
}