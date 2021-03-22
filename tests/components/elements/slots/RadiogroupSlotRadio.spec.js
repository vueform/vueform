import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('RadiogroupSlotRadio', () => {
  useElementComponent('radiogroup', 'RadiogroupSlotRadio', { items: [1,2,3] })

  describe('isDisabled', () => {
    it('should only be true if item or all items are disabled', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'radiogroup',
            items: [
              'value',
              'value2',
              'value3',
            ]
          }
        }
      })

      let el = form.vm.el$('el')
      let slot = findAllComponents(form, { name: 'RadiogroupSlotRadio' }).at(0)

      expect(slot.vm.isDisabled).toBe(false)

      el.disable([0])
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
            type: 'radiogroup',
            items: [
              'value',
              'value2',
              'value3',
            ]
          }
        }
      })

      let el = form.vm.el$('el')
      let slot = findAllComponents(form, { name: 'RadiogroupSlotRadio' }).at(0)
      let label = findAll(slot, 'label').at(0)
      let input = findAll(slot, 'input').at(0)

      expect(label.attributes('class')).toStrictEqual(slot.vm.classes.label)
      expect(label.attributes('for')).toStrictEqual('el-0')

      expect(input.attributes('value')).toStrictEqual('0')
      expect(input.attributes('class')).toStrictEqual(slot.vm.classes.radio)
      expect(input.attributes('name')).toStrictEqual('el')
      expect(input.attributes('id')).toStrictEqual('el-0')
      expect(input.attributes('disabled')).toStrictEqual(undefined)

      el.disable([0])

      await nextTick()

      expect(input.attributes('disabled')).not.toStrictEqual(undefined)

      expect(findAll(label, 'span').at(0).element.innerHTML).toBe('value')
    })
  })
})