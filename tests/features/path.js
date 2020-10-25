import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export default function path (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should have `path` equal to name if parent is not provided', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.path).toBe(el.vm.name)
    })
  }
}