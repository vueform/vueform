import { createForm, destroy } from 'test-helpers'

export const handleTag = function (elementType, elementName, options) {
  it('should trigger `tag` on non-native element', async () => {
    let onTagMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: ['a', 'b', 'c'],
          onTag: onTagMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.$emit('tag', 'query')

    expect(onTagMock).toHaveBeenCalledWith('query', el)

    // destroy() // teardown
  })
}