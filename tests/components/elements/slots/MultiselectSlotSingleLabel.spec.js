import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('MultiselectSlotSingleLabel', () => {
  useElementComponent('select', 'MultiselectSlotSingleLabel', { items: ['Select option'], default: 'Select option', native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'select',
            native: false,
            default: 'Select option',
            items: ['Select option']
          }
        }
      })

      let el = findAllComponents(form, { name: 'SelectElement' }).at(0)
      let slot = findAllComponents(el, { name: 'MultiselectSlotSingleLabel' }).at(0)

      expect(slot.html()).toContain('Select option')
    })
  })
})