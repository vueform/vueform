import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'vue'

describe('CheckboxgroupCheckbox', () => {
  useElementComponent('checkboxgroup', 'CheckboxgroupCheckbox', { items: [1,2,3] })

  describe('isDisabled', () => {
    it('should only be true if item or all items are disabled', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'checkboxgroup',
            items: [
              'value',
              'value2',
              'value3',
            ]
          }
        }
      })

      let el = form.vm.el$('el')
      let slot = findAllComponents(form, { name: 'CheckboxgroupCheckbox' }).at(0)

      expect(slot.vm.isDisabled).toBe(false)

      el.disable(['value'])
      expect(slot.vm.isDisabled).toBe(true)

      el.enableAll()
      expect(slot.vm.isDisabled).toBe(false)

      el.disableAll()
      expect(slot.vm.isDisabled).toBe(true)
    })
  })

  describe('rendering', () => {
    it('should have DOM with right attributes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'checkboxgroup',
            items: [
              'value',
              'value2',
              'value3',
            ]
          }
        }
      })

      let el = form.vm.el$('el')
      let slot = findAllComponents(form, { name: 'CheckboxgroupCheckbox' }).at(0)
      let text = findAll(slot, 'span').at(0)
      let input = findAll(slot, 'input').at(0)

      slot.vm.classes.container.forEach((c) => {
        expect(slot.attributes('class')).toContain(c)
      })

      expect(input.attributes('value')).toStrictEqual('value')

      slot.vm.classes.input.forEach((c) => {
        expect(input.attributes('class')).toContain(c)
      })

      expect(input.attributes('name')).toStrictEqual('el-value')
      expect(input.attributes('id')).toStrictEqual('el-value')
      expect(input.attributes('disabled')).toStrictEqual(undefined)

      el.disable(['value'])

      await nextTick()

      expect(input.attributes('disabled')).not.toStrictEqual(undefined)

      expect(text.element.innerHTML).toBe('value')
    })
  })
})