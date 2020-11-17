import { createForm, findAllComponents, findAll } from 'test-helpers'

export default function (elementType, elementName, options) {
  describe('Checkboxes', () => {
    it('should have the right attributes for checkboxes', () => {
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
      let input = inputs.at(0)
      let input2 = inputs.at(1)
      let label = input.element.parentElement
      let label2 = input2.element.parentElement

      expect(input.attributes('name')).toBe('el-1')
      expect(input.attributes('id')).toBe('el-1')
      expect(input2.attributes('name')).toBe('el-2')
      expect(input2.attributes('id')).toBe('el-2')

      expect(label.innerHTML).toContain('value')
      expect(label2.innerHTML).toContain('value2')
      expect(label.getAttribute('for')).toBe('el-1')
      expect(label2.getAttribute('for')).toBe('el-2')
    })
  })
}