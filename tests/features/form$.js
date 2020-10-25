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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.form$).toStrictEqual(form.vm)
    })
  }
}