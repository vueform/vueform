import { createForm, destroy } from 'test-helpers'

export { searchChange, open, close, clear, paste } from './handleSelectEvents'

const valueOptions = (value, el) => {
  return _.isArray(value) ? _.map(value, (v) => el.input.getOption(v)) : [el.input.getOption(value)]
}

export const select = function (elementType, elementName, options) {
  it('should trigger `select` on non-native element', async () => {
    let onSelectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          onSelect: onSelectMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.select({ value: 0, label: 1 })

    expect(onSelectMock).toHaveBeenCalledWith(0, el)

    // destroy() // teardown
  })
}

export const deselect = function (elementType, elementName, options) {
  it('should trigger `deselect` on non-native element', async () => {
    let onDeselectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: [1,2,3],
          default: [0],
          onDeselect: onDeselectMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.deselect({ value: 0, label: 1 })

    expect(onDeselectMock).toHaveBeenCalledWith(0, el)

    // destroy() // teardown
  })
}