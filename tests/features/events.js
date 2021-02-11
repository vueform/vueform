import { createForm } from 'test-helpers'

export const events = function (elementType, elementName, options) {
  it('should have "' + options.events.join('", "') + '" `events`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.events).toStrictEqual(options.events)
  })
}

export const on = function (elementType, elementName, options) {
  it('should be able to subscribe for `events`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    let onEventMock = jest.fn()

    el.on('event', onEventMock)

    expect(onEventMock).not.toHaveBeenCalled()

    el.fire('event', 'a', 'b')

    expect(onEventMock).toHaveBeenLastCalledWith('a', 'b')
  })
}

export const off = function (elementType, elementName, options) {
  it('should be able to unsubscribe from `events`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    let onEventMock = jest.fn()

    el.on('event', onEventMock)

    expect(onEventMock).not.toHaveBeenCalled()

    el.off('event')

    el.fire('event')

    expect(onEventMock).not.toHaveBeenCalled()
  })
}

export const onCreated = function (elementType, elementName, options) {
  it('should subscribe to element `events`', () => {
    let schema = {
        el: {
          type: elementType,
        }
      }

    let form = createForm({
      schema,
    })

    let el = form.vm.el$('el')

    let mocks = {}

    el.events.forEach((event) => {
      mocks[event] = jest.fn()
      schema.el[`on${_.upperFirst(event)}`] = mocks[event]
    })

    form = createForm({schema})

    el = form.vm.el$('el')

    el.events.forEach((event) => {
      el.fire(event)
    })

    el.events.forEach((event) => {
      expect(mocks[event]).toHaveBeenCalled()
    })
    
  })
}