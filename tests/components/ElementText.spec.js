import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementText', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'text',
        before: 'before',
      }
    }
  })

  let ElementText = findAllComponents(form, { name: 'ElementText' }).at(0)

  useElementComponent('text', 'ElementText', { before: 'before' }, {
    mergeWith: {
      container: ElementText.vm.classes.container_before,
    }
  })

  describe('rendering', () => {
    it('should render', () => {
      let before = 'before'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            before,
          }
        }
      })

      let Text = form.findComponent({ name: 'ElementText' })

      expect(Text.html()).toContain(before)
    })
  })
})