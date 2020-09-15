import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Has Addon Mixin', () => {
  it('should render as a string', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          addon: {
            before: 'aaa'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let ia = a.findComponent({name: 'InputAddon'})

    expect(ia.html()).toContain('aaa')

    a.vm.addon.before = 'bbb'

    LocalVue.nextTick(() => {
      expect(ia.html()).toContain('bbb')

      done()
    })
  })

  it('should render the value of a function', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          addonVar: 'aaa',
          addon: {
            before: (el$) => {
              return el$.schema.addonVar
            }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let ia = a.findComponent({name: 'InputAddon'})

    expect(ia.html()).toContain('aaa')

    a.vm.schema.addonVar = 'bbb'

    LocalVue.nextTick(() => {
      expect(ia.html()).toContain('bbb')

      done()
    })
  })

  it('should render as a component', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          addonVar: 'aaa',
          addon: {
            before: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.schema.addonVar)
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let ia = a.findComponent({name: 'InputAddon'})

    expect(ia.html()).toContain('aaa')

    a.vm.schema.addonVar = 'bbb'

    LocalVue.nextTick(() => {
      expect(ia.html()).toContain('bbb')

      done()
    })
  })
})