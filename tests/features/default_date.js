import { testPropDefault, createForm } from 'test-helpers'

export const default_ = function (elementType, elementName, options) {
  it('should have "null" as `default` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toBe(null)
  })

  it('should set `default` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat,
        }
      }
    })

    let el = form.vm.el$('el')

    el.default = options.value

    expect(el.schema.default).toBe(options.value)
  })

  it('should convert string date to date object according to valueFormat in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2,
          default: options.value2,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toStrictEqual(moment(options.value, options.valueFormat).toDate())
  })

  it('should return date object in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: moment(options.value, options.valueFormat).toDate(),
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toStrictEqual(moment(options.value, options.valueFormat).toDate())
  })

  it('should throw an error if `default` is not provided according to valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.default = options.value
      el.default
    }).toThrowError()

    expect(() => {
      el.default = options.value2
      el.default
    }).not.toThrowError()
  })
}