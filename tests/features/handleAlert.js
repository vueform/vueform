import { createForm, destroy } from 'test-helpers'

export const handleAlert = function (elementType, elementName, options) {
  // @todo
  it('should ', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    // destroy(form) // teardown
  })
}