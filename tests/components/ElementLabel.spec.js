import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Element Label Rendering', () => {
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
            return el$.schema.labelVar
          }
        }
      }
    })

    expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
  })

  it('should render the value of a function when it\'s updated', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          labelVar: 'Name Var',
          label: (el$) => {
            return el$.schema.labelVar
          }
        }
      }
    })

    expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')

    form.vm.schema.name.labelVar = 'Name Var Updated'

    LocalVue.nextTick(() => {
      expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var Updated')
      done()
    })
  })

  it('should render as a component', () => {
    const LocalVue = createLocalVue()

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          labelVar: 'Name Var',
          label: LocalVue.extend({
            props: ['el$'],
            render(h) {
              return h('div', this.el$.schema.labelVar)
            }
          })
        }
      }
    })

    expect(form.findComponent({name: 'ElementLabel'}).html()).toContain('Name Var')
  })
})