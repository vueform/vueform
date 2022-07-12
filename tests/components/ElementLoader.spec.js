import { createForm, destroy } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'vue'

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
            rules: 'required',
          }
        }
      }, {
        attach: true,
      })
      
      let el = form.vm.el$('el')

      expect(findAllComponents(form, { name: 'ElementLoader' }).length).toBe(0)

      el.Validators[0].pending = true

      await nextTick()

      let ElementLoader = findAllComponents(form, { name: 'ElementLoader' }).at(0)
      
      expect(ElementLoader.vm.$el).toBeVisible()

      destroy(form)
    })
  })
})