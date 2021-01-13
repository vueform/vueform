import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'composition-api'
import flushPromises from 'flush-promises'
import useElementComponent from './../composables/useElementComponent'

expect.extend({toBeVisible})

describe('InputAddon', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'text',
        addons: {
          before: 'before'
        }
      }
    }
  })

  let InputAddon = findAllComponents(form, { name: 'InputAddon' }).at(0)

  useElementComponent('text', 'InputAddon', { addons:{before:'before'} }, {
    mergeWith: {
      [InputAddon.vm.mainClass]: {
        [InputAddon.vm.defaultClasses.addonBefore]: InputAddon.vm.type === 'before',
        [InputAddon.vm.defaultClasses.addonAfter]: InputAddon.vm.type === 'after',
      }
    }
  })

  describe('rendering', () => {
    it('should render as a string', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            addons: {
              before: 'before'
            }
          }
        }
      })

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('before')

      form.vm.schema.el.addons.before = 'not before'

      await nextTick()

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('not before')
    })

    it('should render the value of a function', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: (el$) => {
                return el$.schema.beforeVar
              }
            }
          }
        }
      })

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('before var')

      form.vm.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('not before var')
    })

    it('should render as a component', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: markRaw({
                props: ['el$'],
                render(h) {
                  return createElement(h, 'div', this.el$.schema.beforeVar)
                }
              })
            } 
          }
        }
      })

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('before var')

      form.vm.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'InputAddon'}).html()).toContain('not before var')
    })
  })
})