import { createForm } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('ElementLabelFloating', () => {
  useElementComponent('text', 'ElementLabelFloating', { floating: 'floating' })

  describe('classes', () => {
    it('should add visible class to container when visible', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            floating: 'El'
          }
        }
      })

      let el = form.vm.el$('el')
      let component = findAllComponents(form, { name: 'ElementLabelFloating' }).at(0).vm

      expect(component.classes.label).not.toContain(component.classes.label_visible)

      el.update('value')

      await nextTick()

      expect(component.classes.label).toContain(component.classes.label_visible)
      
    // destroy(form) // teardown
    })
  })

  describe('floating', () => {
    it('should be equal to element floating', () => {
      let floating = '<div class="floating">floating</div>'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            floating,
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
          }
        }
      })

      let LabelFloating = form.findComponent({ name: 'ElementLabelFloating' })

      expect(LabelFloating.html()).toContain(floating)
    })
  })
})