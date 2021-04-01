export const handleError = function (elementType, elementName, options) {
  it('should trigger `error` event on error', async () => {
    let onErrorMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onError: onErrorMock,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onErrorMock).not.toHaveBeenCalled()

    el.handleError('error', 'e')

    expect(onErrorMock).toHaveBeenCalledWith('error', 'e')
    
    // destroy(form) // teardown
  })

  it('should throw `error` in alert if error listeners is not defined', async () => {
    let alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleError('error')

    expect(alertSpy).toHaveBeenLastCalledWith('error')

    // destroy() // teardown
  })
}