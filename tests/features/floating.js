import { createForm, testComputedOption, findAllComponents } from 'test-helpers'

export const floating = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'floating', null, 'floating')
}

export const rendering = function (elementType, elementName, options) {
  it('should should render `ElementLabelFloating` if has floating', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          floating: 'Floating'
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabelFloating = findAllComponents(elWrapper, { name: 'ElementLabelFloating' })

    expect(ElementLabelFloating.length).toBe(1)
  })

  it('should should not render `ElementLabelFloating` if has no floating', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabelFloating = findAllComponents(elWrapper, { name: 'ElementLabelFloating' })

    expect(ElementLabelFloating.length).toBe(0)
  })
}