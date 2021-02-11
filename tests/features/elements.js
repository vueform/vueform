import { createForm } from 'test-helpers'

export const elementComponent = function (elementType, elementName, options) {
  it('should return element component name by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.elementComponent(form.vm.schema.el)).toStrictEqual(`${_.upperFirst(_.camelCase(elementType))}Element`)
  })
}