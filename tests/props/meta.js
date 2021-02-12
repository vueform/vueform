import { createForm, testPropDefault, findAllComponents } from 'test-helpers'

export const rendering = function (elementType, elementName, options) {
  it('should not render template if meta', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          meta: true
        }
      }
    })
    
    expect(form.find('input').exists()).toBe(false)
  })

  it('should render template if not meta', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          meta: false
        }
      }
    })
    
    expect(form.find('input').exists()).toBe(true)
  })
}