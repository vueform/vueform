import { createForm, destroy } from 'test-helpers'

export const handleAlert = function (elementType, elementName, options) {

  it('should fire browser alert', () => {

    let alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {})

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleAlert()

    expect(alertMock).toHaveBeenCalled()

    // destroy(form) // teardown
  })
}