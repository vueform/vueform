import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementDescription', () => {
  useElementComponent('text', 'ElementDescription', { description: 'description' })

  describe('rendering', () => {
    it('should render html', () => {
      let description = '<div class="description">description</div>'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            description,
          }
        }
      })

      let Description = form.findComponent({ name: 'ElementDescription' })

      expect(Description.html()).toContain(description)
    })
  })
})