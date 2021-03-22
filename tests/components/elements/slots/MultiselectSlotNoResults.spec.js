import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('MultiselectSlotNoOptions', () => {
  useElementComponent('select', 'MultiselectSlotNoOptions', { items: [], native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'select',
            native: false,
            noOptionsText: 'No results, sorry',
            items: ['a']
          }
        }
      })

      let el = findAllComponents(form, { name: 'SelectElement' }).at(0)

      el.vm.input.search = 'aaa'

      await nextTick()

      let slot = findAllComponents(el, { name: 'MultiselectSlotNoOptions' }).at(0)

      expect(slot.html()).toContain('No results, sorry')
    })
  })
})