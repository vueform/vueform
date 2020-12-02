import { createForm } from 'test-helpers'

export const removing = function (elementType, elementName, options) {
  it('should have `removing` false by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.removing).toBe(false)
  })
}