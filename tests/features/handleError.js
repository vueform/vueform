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

    el.handleError('error')

    expect(onErrorMock).toHaveBeenCalledWith('error')
    
    // destroy(form) // teardown
  })
}