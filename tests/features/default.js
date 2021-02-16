import { testPropDefault, createForm } from 'test-helpers'

export const defaultValue = function (elementType, elementName, options) {
  it('should be equal to defaultValue if default is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default !== undefined ? options.default : 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(options.default !== undefined ? options.default : 'value')
  })

  it('should be equal to nullValue if default is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(el.nullValue)
  })
}