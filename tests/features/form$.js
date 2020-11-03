import { createForm, findAllComponents } from 'test-helpers'

export default function form$ (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should inject `form$`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.form$).toStrictEqual(form.vm)
    })
  }
}