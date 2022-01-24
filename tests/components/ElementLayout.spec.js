import { createForm, findAllComponents} from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('ElementLayout', () => {
  useElementComponent('text', 'ElementLayout', { addClass: 'element-class' })

  describe('rendering', () => {
    it('should render label if config.forceLabels is false, but element has label', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            label: 'Name'
          }
        }
      }, {
        config: {
          forceLabels: false,
        }
      })

      expect(form.findComponent({name:'ElementLabel'}).html().match(/<\/label>/) !== null).toBe(true)
    })

    it('should not render label if config.forceLabels is false and element does not have label', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
          }
        }
      }, {
        config: {
          forceLabels: false,
        }
      })

      expect(form.findComponent({name:'ElementLabel'}).html().match(/<\/label>/) !== null).toBe(false)
    })

    it('should render label if config.forceLabels is true, but element does not have label', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
          }
        }
      }, {
        config: {
          forceLabels: true,
        }
      })
      
      expect(form.findComponent({name:'ElementLabel'}).html().match(/<\/label>/) !== null).toBe(true)
    })

    it('should render label if config.forceLabels is true, but element does have label', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            label: 'Name'
          }
        }
      }, {
        config: {
          forceLabels: true,
        }
      })
      
      expect(form.findComponent({name:'ElementLabel'}).html().match(/<\/label>/) !== null).toBe(true)
    })

    it('should render decorators', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            label: 'label',
            info: '<div>info</div>',
            description: '<div>description</div>',
            before: '<div>before</div>',
            after: '<div>after</div>',
            between: '<div>between</div>',
          }
        }
      })

      
      expect(form.findComponent({ name: 'ElementInfo' }).html()).toContain('<div>info</div>')
      expect(form.findComponent({ name: 'ElementDescription' }).html()).toContain('<div>description</div>')
      expect(findAllComponents(form, { name: 'ElementText' }).at(0).html()).toContain('<div>before</div>')
      expect(findAllComponents(form, { name: 'ElementText' }).at(1).html()).toContain('<div>between</div>')
      expect(findAllComponents(form, { name: 'ElementText' }).at(2).html()).toContain('<div>after</div>')
    })
  })
})