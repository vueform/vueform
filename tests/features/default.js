import { testPropDefault, createForm } from 'test-helpers'

export const default_ = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
        items: options.items || [],
      }
    }
  })

  let el = form.vm.el$('el')
}

export const defaultValue = function (elementType, elementName, options) {
  it('should be equal to defaultValue if default is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.value || 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(options.value || 'value')
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