import { createForm, createElement } from 'test-helpers'
import { nextTick, markRaw, h } from 'vue'
import useElementComponent from './../composables/useElementComponent'

describe('ElementLabel', () => {
  useElementComponent('text', 'ElementLabel', { label: 'label' })

  describe('rendering', () => {
    it('should render as a string', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            label: 'Name'
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name')
    })

    it('should render the value of a function', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            labelVar: 'Name Var',
            label: (el$) => {
              return el$.form$.vueform.schema.name.labelVar
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
    })

    it(`should render the value of a function when it's updated`, async () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            labelVar: 'Name Var',
            label: (el$) => {
              return el$.form$.vueform.schema.name.labelVar
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')

      form.vm.vueform.schema.name.labelVar = 'Name Var Updated'

      await nextTick()
      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var Updated')
    })

    it('should render as a component', () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            labelVar: 'Name Var',
            label: markRaw({
              inject: ['form$'],
              render(h) {
                return createElement(h, 'div', this.form$.value ? this.form$.value.options.schema.name.labelVar : this.form$.options.schema.name.labelVar)
              }
            })
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
    })
    
    it('should render as slot', async () => {
      
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            slots: {
              description: function render() {
                return h('div', 'schema slot')
              }
            }
          }
        }
      })
      
      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('schema slot')
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
              'label': () => createElement(h, 'div', 'this is an inline slot')
            }
          })
        ])
      })
      
      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('this is an inline slot')
    })
  })
})