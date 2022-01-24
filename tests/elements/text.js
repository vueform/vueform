import { createForm, findAllComponents } from 'test-helpers'

export default function (elementType, elementName, options) {
  it('should add `name` attribute to input', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.find('input').attributes('name')).toBe('el')
  })
}