import { createForm, findAllComponents, testComputedOption, createElement } from 'test-helpers'
import { defineComponent } from 'composition-api'
import { TextElement } from './../../src/themes/default'
import Vue from 'vue'

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

    // Computed Options
    testComputedOption(it, elementType, 'before', null, 'before')
    testComputedOption(it, elementType, 'between', null, 'between')
    testComputedOption(it, elementType, 'after', null, 'after')
    
    // Computed Props
    if (!options.slots) {
      it('should have default `slots` by default', () => {
        let form = createForm({
          schema: {
            el: {
              type: elementType,
            }
          }
        })

        let el = findAllComponents(form, { name: elementName }).at(0)

        expect(el.vm.slots).toStrictEqual({
          label: null,
          info: null,
          before: null,
          between: null,
          after: null,
          description: null,
          error: null,
          message: null,
        })
      })
    }

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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.slots).toStrictEqual(Object.assign({}, defaultSlots, {
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.slots = {
        custom: 'custom-slot'
      }

      expect(el.vm.slots).toStrictEqual(Object.assign({}, defaultSlots, {
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.html()).toContain('it is before')
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.html()).toContain('it is between')
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

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.html()).toContain('it is after')
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
                [slot]: defineComponent({
                  name: 'CustomSlot',
                  props: ['el$'],
                  render(h) {
                    return createElement(h, 'div', 'from schema slot')
                  }
                })
              }
            }
          }
        })

        let el = findAllComponents(form, { name: elementName }).at(0)
        let CustomSlot = findAllComponents(el, { name: 'CustomSlot' })

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

        let el = findAllComponents(form, { name: elementName }).at(0)

        el.vm.slots = {
          [slot]: defineComponent({
            name: 'CustomSlot',
            props: ['el$'],
            render(h) {
              return createElement(h, 'div', 'from schema slot')
            }
          })
        }

        Vue.nextTick(() => {
          let CustomSlot = findAllComponents(el, { name: 'CustomSlot' })
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
              type: 'text'
            }
          }
        }, {}, function(h) {
          return createElement(h, 'form', [
            createElement(h, TextElement, {
              props: {
                schema: {
                  type: 'text',
                  label: 'label',
                  info: 'info',
                },
                name: 'el'
              },
              directives: [
                {
                  name: 'ref',
                  arg: 'element$'
                }
              ],
              scopedSlots: {
                [slot]: (props) => {
                  return createElement(h, 'div', 'from inline slot')
                }
              }
            })
          ])
        })

        let el = findAllComponents(form, { name: elementName }).at(0)

        expect(el.html()).toContain('from inline slot')
    }

  })
}