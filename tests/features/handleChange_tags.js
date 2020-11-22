export { handleChange } from './handleChange_multiselect'

export const rendering = function (elementType, elementName, options) {
  it('should trigger `handleChange` on change', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.select(el.getOption(options.value[0]))

    expect(onChangeMock).toHaveBeenCalledWith(el.currentValue, el.previousValue)
  })
}