import { createForm, findAllComponents, findAll, createElement } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import flushPromises from 'flush-promises'
import useElementComponent from './../composables/useElementComponent'

expect.extend({toBeVisible})

describe('ElementAddon', () => {
  useElementComponent('text', 'ElementAddon', { addons: { before:'before'} })

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

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before')

      form.vm.vueform.schema.el.addons.before = 'not before'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before')
    })

    it('should render the value of a function', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: (el$) => {
                return el$.form$.vueform.schema.el.beforeVar
              }
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.vueform.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    })

    it('should render as a component', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            beforeVar: 'before var',
            addons: {
              before: markRaw({
                inject: ['el$', 'form$'],
                render(h) {
                  return createElement(h, 'div', this.form$.value ? this.form$.value.options.schema.el.beforeVar : this.form$.options.schema.el.beforeVar)
                }
              })
            }
          }
        }
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')

      form.vm.vueform.schema.el.beforeVar = 'not before var'

      await nextTick()

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    })

    //@todo:szm make it dynamic
    it('should render as a VueComponent', async () => {
      
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            addons: {
              before: function VueComponent() {
                return 'ElementAddonBefore'
              }
            }
          }
        }
      })
      
      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('ElementAddonBefore')
    })
    
    //@todo:adam does not render
    // it('should render as slot', async () => {
    //
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: 'text',
    //         beforeVar: 'before var',
    //         slots: {
    //           'addon-before': markRaw({
    //             inject: ['el$', 'form$'],
    //             render(h) {
    //               return createElement(h, 'div', this.form$.value ? this.form$.value.options.schema.el.beforeVar : this.form$.options.schema.el.beforeVar)
    //             }
    //           })
    //         }
    //       }
    //     }
    //   })
    //
    //   expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('before var')
    //
    //   form.vm.vueform.schema.el.beforeVar = 'not before var'
    //
    //   await nextTick()
    //
    //   expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('not before var')
    // })
    
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
              'addon-before': () => createElement(h, 'div', 'this is an inline slot')
            }
          })
        ])
      })

      expect(form.findComponent({name: 'ElementAddon'}).html()).toContain('this is an inline slot')
    })
  })
})