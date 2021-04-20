import { createForm, createElement } from 'test-helpers'
import { nextTick, markRaw } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

describe('ElementLabel', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'text',
        label: 'El'
      }
    }
  })

  let el = form.vm.el$('el')

  useElementComponent('text', 'ElementLabel', { label: 'label' }, {
    mergeWith: {
      label: el.columnsClasses.label,
    }
  })

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
              return el$.form$.laraform.schema.name.labelVar
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
    })

    it('should render the value of a function when it\'s updated', async () => {
      let form = createForm({
        schema: {
          name: {
            type: 'text',
            labelVar: 'Name Var',
            label: (el$) => {
              return el$.form$.laraform.schema.name.labelVar
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')

      form.vm.laraform.schema.name.labelVar = 'Name Var Updated'

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
              props: ['el$'],
              render(h) {
                return createElement(h, 'div', this.el$.form$.laraform.schema.name.labelVar)
              }
            })
          }
        }
      })

      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
    })
  })
})