import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'

describe('MultiselectSlotOption', () => {
  useElementComponent('select', 'MultiselectSlotOption', { items: ['value'], native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'select',
            native: false,
            items: ['Select option']
          }
        }
      })

      let el = findAllComponents(form, { name: 'SelectElement' }).at(0)
      let slot = findAllComponents(el, { name: 'MultiselectSlotOption' }).at(0)

      expect(slot.html()).toContain('Select option')
    })
  })
})