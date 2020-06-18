import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Form Element Rendering', () => {
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

  it('should render elements in order of wizard `elements`', (done) => {
    let LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.schema)).toStrictEqual(['a', 'b', 'c'])
      done()
    })
  })

  it('should render elements in order of tabs `elements`', (done) => {
    let LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      expect(_.keys(form.findComponent({ name: 'FormElements' }).vm.schema)).toStrictEqual(['a', 'b', 'c'])
      done()
    })
  })
})