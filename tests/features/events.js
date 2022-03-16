import { createForm, destroy } from 'test-helpers'

// // Does not make sense anymore
// export const events = function (elementType, elementName, options) {
//   it('should have "' + options.events.join('", "') + '" `events`', () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')
    
//     expect(el.events).toStrictEqual(options.events)

//     // destroy() // teardown
//   })
// }

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

    // destroy() // teardown
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

    expect(el.listeners.event[0]).toStrictEqual(onEventMock)

    el.off('event')

    expect(el.listeners.event).toBe(undefined)

    // destroy() // teardown
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
      schema.el[`on${_.upperFirst(_.camelCase(event))}`] = mocks[event]
    })

    destroy(form) // teardown

    form = createForm({
      schema: schema,
    })

    el = form.vm.el$('el')

    el.events.forEach((event) => {
      el.fire(event)
    })

    el.events.forEach((event) => {
      expect(mocks[event]).toHaveBeenCalled()
    })
    

    // destroy() // teardown
  })
}