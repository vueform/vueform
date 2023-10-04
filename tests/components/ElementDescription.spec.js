import { createForm, createElement } from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'
import { h } from 'vue'

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
    
    it('should render as slot', async () => {
      
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            slots: {
              description: function render() {
                return h('div', 'schema slot')
              }
            }
          }
        }
      })
      
      expect(form.findComponent({name: 'ElementDescription'}).html()).toContain('schema slot')
    })
    
    it('should render as inline slot', async () => {
      
      const form = createForm({
        schema: {
          el: {
            type: 'text'
          }
        }
      }, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, 'TextElement', {
            props: {
              name: 'el',
            },
            scopedSlots: {
              'description': () => createElement(h, 'div', 'this is an inline slot')
            }
          })
        ])
      })
      
      expect(form.findComponent({name: 'ElementDescription'}).html()).toContain('this is an inline slot')
    })
  })
})