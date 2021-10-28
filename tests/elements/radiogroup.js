import { createForm, findAllComponents, findAll } from 'test-helpers'

export default function (elementType, elementName, options) {
  describe('Radios', () => {
    it('should have the right attributes for radios', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            items: {
              1: 'value',
              2: 'value2',
            },
          }
        }
      })

      let el = form.vm.el$('el')
      let elWrapper = findAllComponents(form, { name: elementName }).at(0)
      let inputs = findAll(elWrapper, `input[type="${options.fieldType}"]`) 
      let labels = findAll(elWrapper, 'label')
      let input = inputs.at(0)
      let input2 = inputs.at(1)
      let label = labels.at(0)
      let label2 = labels.at(1)

      expect(input.attributes('name')).toBe('el')
      expect(input.attributes('id')).toBe('el-1')
      expect(input.attributes('value')).toBe('1')
      expect(input2.attributes('name')).toBe('el')
      expect(input2.attributes('id')).toBe('el-2')
      expect(input2.attributes('value')).toBe('2')

      expect(label.element.innerHTML).toContain('value')
      expect(label2.element.innerHTML).toContain('value2')
    })
  })
}