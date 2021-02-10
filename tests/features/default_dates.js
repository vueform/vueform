import { testPropDefault, createForm } from 'test-helpers'

export const default_ = function (elementType, elementName, options) {
  it('should have "[]" as `default` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toStrictEqual([])
  })

  it('should set `default` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.default = ['2020-12-30']

    expect(el.schema.default).toStrictEqual(['2020-12-30'])
  })

  it('should convert string date to date object according to valueFormat in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY',
          default: ['30-12-2020'],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toStrictEqual([moment('2020-12-30').toDate()])
  })

  it('should return date object in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [moment('2020-12-30').toDate()],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.default).toStrictEqual([moment('2020-12-30').toDate()])
  })

  it('should throw an error if `default` is not provided according to valueFormat', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.default = ['30-12-2020']

    expect(() => {
      el.default
    }).toThrowError()

    el.default = ['2020-12-30']

    expect(() => {
      el.default
    }).not.toThrowError()
  })
}