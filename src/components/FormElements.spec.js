import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../utils/testHelpers'

describe('Form elements', () => {
  it('should render element based on type', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({name: 'TextElement'}).exists()).toBe(true)
  })

  it('should render element based on component', () => {
    let LocalVue = new createLocalVue()

    let form = createForm({
      schema: {
        name: {
          component: LocalVue.extend({
            name: 'CustomElement',
            render(h) {
              return h('div', 'Custom Element')
            }
          })
        }
      }
    })

    expect(form.findComponent({name: 'CustomElement'}).exists()).toBe(true)
  })

  it('should render elements in order of wizard `elements`', () => {
    let form = createForm({
      wizard: {
        first: {
          elements: ['a', 'b']
        },
        second: {
          elements: ['c']
        },
      },
      schema: {
        b: {
          type: 'text,'
        },
        c: {
          type: 'text,'
        },
        a: {
          type: 'text,'
        },
      }
    })

    expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.elements)).toStrictEqual(['a', 'b', 'c'])
  })

  it('should render elements in order of tabs `elements`', () => {
    let form = createForm({
      tabs: {
        first: {
          elements: ['a', 'b']
        },
        second: {
          elements: ['c']
        },
      },
      schema: {
        b: {
          type: 'text,'
        },
        c: {
          type: 'text,'
        },
        a: {
          type: 'text,'
        },
      }
    })

    expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.elements)).toStrictEqual(['a', 'b', 'c'])
  })
})