import { createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

const valueOptions = (value, el) => {
  return _.isArray(value) ? _.map(value, (v) => el.input.getOption(v)) : el.input.getOption(value)
}

export const select = function (elementType, elementName, options) {
  it('should trigger `select` on non-native element', async () => {
    let onSelectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          onSelect: onSelectMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.select(valueOptions(options.value, el))

    expect(onSelectMock).toHaveBeenCalledWith(options.value, el)

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
          items: options.items,
          default: options.value,
          onDeselect: onDeselectMock,
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.deselect(valueOptions(options.value, el))

    expect(onDeselectMock).toHaveBeenCalledWith(options.value, el)

    // destroy() // teardown
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
          items: options.items,
          onSearchChange: onSearchChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.search = 'query'

    await nextTick()

    expect(onSearchChangeMock).toHaveBeenCalledWith('query', el)

    // destroy() // teardown
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
          items: options.items,
          onOpen: onOpenMock
        }
      }
    }, {
      attach: true
    })

    let el = form.vm.el$('el')

    el.input.open()

    expect(onOpenMock).toHaveBeenCalledWith(el)

    destroy(form)

    // destroy() // teardown
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
          items: options.items,
          onClose: onCloseMock
        }
      }
    }, {
      attach: true
    })

    let el = form.vm.el$('el')

    el.input.open()
    el.input.close()

    expect(onCloseMock).toHaveBeenCalledWith(el)

    destroy(form)

    // destroy() // teardown
  })
}

export const clear = function (elementType, elementName, options) {
 
  it('should trigger `clear` on non-native element', async () => {
    
    let onClearMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          onClear: onClearMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.input.select(valueOptions(options.value, el))
    
    el.input.clear()
    
    expect(onClearMock).toHaveBeenCalledWith(el)
    
    // destroy() // teardown
  })
}

export const paste = function (elementType, elementName, options) {
  
  it('should trigger `paste` on non-native element', async () => {
    
    let onPasteMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: options.items,
          onPaste: onPasteMock
        }
      }
    }, {
      attach: true
    })
    
    let el = form.vm.el$('el')
    
    el.input.handlePaste()
    
    expect(onPasteMock).toHaveBeenCalled()
    
    destroy(form)
    
    // destroy() // teardown
  })
}