import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('ElementLabelFloating', () => {
  useElementComponent('text', 'ElementLabelFloating', { floating: 'floating', default: 'value' },)

  describe('floating', () => {
    it('should be equal to element floating', () => {
      let floating = '<div class="floating">floating</div>'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            floating,
            default: 'value',
          }
        }
      })

      let el = form.vm.el$('el')
      let LabelFloating = form.findComponent({ name: 'ElementLabelFloating' })

      expect(LabelFloating.vm.floating).toBe(el.floating)
    })
  })

  describe('rendering', () => {
    it('should render html', () => {
      let floating = '<div class="floating">floating</div>'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            floating,
            default: 'value',
          }
        }
      })

      let LabelFloating = form.findComponent({ name: 'ElementLabelFloating' })

      expect(LabelFloating.html()).toContain(floating)
    })
  })
})