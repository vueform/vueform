import { createForm, testComputedOption, findAllComponents } from 'test-helpers'

export const description = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'description', null, 'description')

  it('should should render `ElementDescription`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          description: 'Description'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementDescription = findAllComponents(elWrapper, { name: 'ElementDescription' })

    expect(ElementDescription.length).toBe(1)
  })
}