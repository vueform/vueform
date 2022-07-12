import flushPromises from 'flush-promises'
import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'vue'

describe('ElementError', () => {
  useElementComponent('text', 'ElementError', { rules: 'required', }, {
    execute: (el) => { el.validate() }
  })

  describe('rendering', () => {
    it('should render error', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            rules: 'required',
          }
        }
      })
      
      let el = form.vm.el$('el')

      el.validate()

      await flushPromises()
      await nextTick()

      let Error = form.findComponent({ name: 'ElementError' })

      expect(Error.html()).toContain(el.Validators[0].message)
    })
  })
})