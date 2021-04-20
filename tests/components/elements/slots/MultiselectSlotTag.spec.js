import { createForm, findAllComponents } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('MultiselectSlotTag', () => {
  useElementComponent('tags', 'MultiselectSlotTag', { items: [0], default: [0], native: false })

  describe('rendering', () => {
    it('should render content', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'tags',
            native: false,
            default: ['Select option'],
            items: ['Select option']
          }
        }
      })

      let el = findAllComponents(form, { name: 'TagsElement' }).at(0)
      let slot = findAllComponents(el, { name: 'MultiselectSlotTag' }).at(0)

      expect(slot.html()).toContain('Select option')
    })
  })
})