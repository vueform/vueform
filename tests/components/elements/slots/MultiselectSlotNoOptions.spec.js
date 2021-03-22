import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'

describe('MultiselectSlotNoOptions', () => {
  useElementComponent('select', 'MultiselectSlotNoOptions', { items: [], native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'select',
            native: false,
            noOptionsText: 'No options, sorry',
            items: []
          }
        }
      })

      let el = findAllComponents(form, { name: 'SelectElement' }).at(0)
      let slot = findAllComponents(el, { name: 'MultiselectSlotNoOptions' }).at(0)

      expect(slot.html()).toContain('No options, sorry')
    })
  })
})