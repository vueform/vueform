import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export const events = function (elementType, elementName, options) {
  it('should "' + options.events.join('", "') + '" `events`', () => {
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

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}