import {
  data as baseData,
} from './data'

export {
  requestData,
  load,
  update,
  clear,
  reset,
} from './data'

export const data = function (elementType, elementName, options) {
  baseData(elementType, elementName, options)

  it('should not convert to number by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('123')

    expect(typeof el.data.el).toStrictEqual('string')

    // destroy() // teardown
  })

  it('should convert to number if `forceNumbers: true`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          forceNumbers: true,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('number')

    el.update('123.456')
    expect(typeof el.data.el).toStrictEqual('number')

    el.update('123,456')
    expect(typeof el.data.el).toStrictEqual('number')

    el.update('a123')
    expect(typeof el.data.el).toStrictEqual('string')

    // destroy() // teardown
  })

  it('should convert to number if form\'s `forceNumbers: true`', async () => {
    let form = createForm({
      forceNumbers: true,
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('number')

    // destroy() // teardown
  })

  it('should not convert to number if form\'s `forceNumbers: true` but element `forceNumber: true`', async () => {
    let form = createForm({
      forceNumbers: true,
      schema: {
        el: {
          type: elementType,
          forceNumbers: false,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('string')

    // destroy() // teardown
  })

  it('should convert to number if config `forceNumbers: true`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        forceNumbers: true,
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('number')

    // destroy() // teardown
  })

  it('should not convert to number if config `forceNumbers: true`, but form `forceNumbers: false`', async () => {
    let form = createForm({
      forceNumbers: false,
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        forceNumbers: true,
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('string')

    // destroy() // teardown
  })

  it('should not convert to number if config `forceNumbers: true`, but element `forceNumbers: false`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          forceNumbers: false,
        }
      }
    }, {
      config: {
        forceNumbers: true,
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('string')

    // destroy() // teardown
  })

  it('should convert to number if config `forceNumbers: true`, but form `forceNumbers: false` and element `forceNumbers: true`', async () => {
    let form = createForm({
      forceNumbers: false,
      schema: {
        el: {
          type: elementType,
          forceNumbers: true,
        }
      }
    }, {
      config: {
        forceNumbers: true,
      }
    })

    let el = form.vm.el$('el')

    el.update('123')
    expect(typeof el.data.el).toStrictEqual('number')

    // destroy() // teardown
  })
}