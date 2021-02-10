import { createForm, findAllComponents, testAttribute } from 'test-helpers'

export const rendering = function (elementType, elementName, options) {
  it('should should render `ElementDescription`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          description: 'Element Description'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementDescription = findAllComponents(elWrapper, { name: 'ElementDescription' })

    // Because it's after potential children
    expect(ElementDescription.at(ElementDescription.length - 1).vm.description == el.description).toBe(true)
  })
}