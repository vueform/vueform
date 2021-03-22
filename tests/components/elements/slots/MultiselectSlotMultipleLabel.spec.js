import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('MultiselectSlotMultipleLabel', () => {
  useElementComponent('multiselect', 'MultiselectSlotMultipleLabel', { items: ['value'], default: [0], native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'multiselect',
            native: false,
            default: [0],
            items: ['Select option']
          }
        }
      })

      let el = findAllComponents(form, { name: 'MultiselectElement' }).at(0)
      let slot = findAllComponents(el, { name: 'MultiselectSlotMultipleLabel' }).at(0)

      expect(slot.html()).toContain(el.vm.__('laraform.multiselect.multipleLabelOne'))
    })
  })
})