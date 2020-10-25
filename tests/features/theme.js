import { createForm, findAllComponents } from 'test-helpers'

export default function theme (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should inject `theme`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.theme).toStrictEqual(form.vm.extendedTheme)
    })
  }
}