import { createForm, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'composition-api'

expect.extend({toBeVisible})

describe('ElementLoader', () => {
  useElementComponent('text', 'ElementLoader', { rules: 'required' }, {
    execute: (el) => { el.Validators[0].pending = true }
  })

  describe('rendering', () => {
    it('should render loader', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            rules: 'required'
          }
        }
      }, {
        attach: true,
      })
      
      let el = form.vm.el$('el')
      let ElementLoader = findAllComponents(form, { name: 'ElementLoader' }).at(0)

      expect(ElementLoader.vm.$el).not.toBeVisible()

      el.Validators[0].pending = true

      await nextTick()
      
      expect(ElementLoader.vm.$el).toBeVisible()

      destroy(form)
    })
  })
})