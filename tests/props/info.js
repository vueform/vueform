import { createForm, testPropDefault, findAllComponents } from 'test-helpers'

export const rendering = function (elementType, elementName, options) {
  it('should should render `ElementInfo` if has label', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Label',
          info: 'Element Info'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementInfo = findAllComponents(elWrapper, { name: 'ElementInfo' })

    expect(ElementInfo.at(0).vm.info).toBe(el.info)
  })

  it('should should not render `ElementInfo` if has no label', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          info: 'Element Info'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementInfo = findAllComponents(elWrapper, { name: 'ElementInfo' })

    expect(ElementInfo.length === 0 || ElementInfo.at(0).vm.info !== el.info).toBe(true)
  })
}