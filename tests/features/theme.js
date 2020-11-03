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

      let el = form.vm.el$('el')

      expect(el.theme).toStrictEqual(form.vm.extendedTheme)
    })
  }
}