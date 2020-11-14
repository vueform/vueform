import { createForm, testComputedOption, findAllComponents } from 'test-helpers'

export default function info (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    testComputedOption(it, elementType, 'info', false, 'info')

    it('should should render `ElementInfo` if has label', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            label: 'Label'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      let ElementInfo = findAllComponents(elWrapper, { name: 'ElementInfo' })

      expect(ElementInfo.length).toBe(1)
    })

    it('should should not render `ElementInfo` if has no label', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            info: 'Info'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      let ElementInfo = findAllComponents(elWrapper, { name: 'ElementInfo' })

      expect(ElementInfo.length).toBe(0)
    })
  }
}