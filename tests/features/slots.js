import { createForm, findAllComponents, testComputedOption, createElement,  } from 'test-helpers'
import { defineComponent, markRaw, nextTick } from 'composition-api'
import { TextElement } from './../../src/themes/default'

export default function(elementType, options = {}) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    const defaultForm = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    const defaultSlots = findAllComponents(defaultForm, { name: elementName }).at(0).vm.slots
    const defaultSlotKeys = _.keys(defaultSlots)

    // Computed Options
    testComputedOption(it, elementType, 'before', null, 'before')
    testComputedOption(it, elementType, 'between', null, 'between')
    testComputedOption(it, elementType, 'after', null, 'after')
    
    // Computed Props
    it('should have default `slots` by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      expect(_.keys(el.slots)).toStrictEqual(defaultSlotKeys)
    })

    it('should set `slots` from schema', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            slots: {
              custom: 'custom-slot'
            }
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.slots).toStrictEqual(Object.assign({}, defaultSlots, {
        custom: 'custom-slot'
      }))
    })

    it('should set `slots` to schema', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.vm.el$('el')

      el.slots = {
        custom: 'custom-slot'
      }

      expect(el.slots).toStrictEqual(Object.assign({}, defaultSlots, {
        custom: 'custom-slot'
      }))
    })

    // Template
    it('should render `before`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            before: 'it is before'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      expect(elWrapper.html()).toContain('it is before')
    })

    it('should render `between`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            between: 'it is between'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      expect(elWrapper.html()).toContain('it is between')
    })

    it('should render `after`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            after: 'it is after'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: elementName }).at(0)

      expect(elWrapper.html()).toContain('it is after')
    })

    // Slots
    _.each(_.keys(defaultSlots), (slot) => {
      testSchemaSlot(it, elementName, elementType, slot)
    })
    
    _.each(_.keys(defaultSlots), (slot) => {
      testDynamicSchemaSlot(it, elementName, elementType, slot)
    })

    _.each(_.keys(defaultSlots), (slot) => {
      testInlineSlot(it, elementName, elementType, slot)
    })
  }
}

const testSchemaSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot from schema', () => {

    switch (slot) {
      default:
        let form = createForm({
          schema: {
            el: {
              type: elementType,
              label: 'label',
              info: 'info',
              slots: {
                [slot]: markRaw(defineComponent({
                  name: 'CustomSlot',
                  props: ['el$'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot')
                  }
                }))
              }
            }
          }
        })

        let elWrapper = findAllComponents(form, { name: elementName }).at(0)
        let CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

        expect(CustomSlot.length).toBe(1)
    }

  })
}

const testDynamicSchemaSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot from schema when changes', (done) => {

    switch (slot) {
      default:
        let form = createForm({
          schema: {
            el: {
              type: elementType,
              label: 'label',
              info: 'info',
            }
          }
        })

        let el = form.vm.el$('el')
        let elWrapper = findAllComponents(form, { name: elementName }).at(0)

        el.slots = {
          [slot]: markRaw(defineComponent({
            name: 'CustomSlot',
            props: ['el$'],
            render(h) {
              return createElement(h, 'div', 'from schema slot')
            }
          }))
        }

        nextTick(() => {
          let CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })
          expect(CustomSlot.length).toBe(1)
          done()
        })
    }

  })
}

const testInlineSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot inline', () => {

    switch (slot) {
      default:
        let form = createForm({
          schema: {
            el: {
              type: elementType
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, this.extendedTheme.elements[elementName], {
              props: {
                schema: {
                  type: elementType,
                  label: 'label',
                  info: 'info',
                },
                name: 'el'
              },
              directives: [
                {
                  name: 'ref',
                  arg: 'element$'
                },
              ],
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot')
                }
              }
            })
          ])
        })

        let elWrapper = findAllComponents(form, { name: elementName }).at(0)
        
        expect(elWrapper.html()).toContain('from inline slot')
    }

  })
}