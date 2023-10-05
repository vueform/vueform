import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

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
      
      expect(LabelFloating.isVisible()).toBe(true)
      expect(LabelFloating.html()).toContain(floating)
    })
    
    it('should render placeholder as floating if floatPlaceholder is true and floating is not set', () => {
      
      const form = createForm({
        floatPlaceholders: true,
        schema: {
          el: {
            type: 'text',
            placeholder: 'something',
            default: 'value',
          }
        }
      })
      
      const LabelFloating = form.findComponent({ name: 'ElementLabelFloating' })
      
      expect(LabelFloating.isVisible()).toBe(true)
      expect(LabelFloating.html()).toContain('something')
    })
    
    it('should not render floating if placeholder has value, floatPlaceholder is false and floating is not set', () => {
      
      const form = createForm({
        floatPlaceholders: false,
        schema: {
          el: {
            type: 'text',
            placeholder: 'something',
            default: 'value',
          }
        }
      })
      
      const el = form.vm.el$('el')
      const LabelFloating = form.findComponent({ name: 'ElementLabelFloating' })
      
      expect(el.floating).toBe(null)
      expect(LabelFloating.exists()).toBe(false)
    })
  })
})