import { createForm } from 'test-helpers'

export const select = function (elementType, elementName, options) {
  it('should trigger `select` on non-native element', async () => {
    let onSelectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onSelect: onSelectMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.select(el.selectOptions[1])

    expect(onSelectMock).toHaveBeenCalledWith(el.selectOptions[1])
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
          items: ['a', 'b', 'c'],
          onDeselect: onDeselectMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.$emit('remove', el.selectOptions[1])

    expect(onDeselectMock).toHaveBeenCalledWith(el.selectOptions[1])
  })
}

export const searchChange = function (elementType, elementName, options) {
  it('should trigger `searchChange` on non-native element', async () => {
    let onSearchChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onSearchChange: onSearchChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.$emit('search-change', 'query')

    expect(onSearchChangeMock).toHaveBeenCalledWith('query')
  })
}

export const open = function (elementType, elementName, options) {
  it('should trigger `open` on non-native element', async () => {
    let onOpenMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onOpen: onOpenMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.$emit('open')

    expect(onOpenMock).toHaveBeenCalled()
  })
}

export const close = function (elementType, elementName, options) {
  it('should trigger `close` on non-native element', async () => {
    let onCloseMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onClose: onCloseMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.$emit('close')

    expect(onCloseMock).toHaveBeenCalled()
  })
}