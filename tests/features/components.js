import { nextTick } from 'vue'
import { defineComponent, markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement } from 'test-helpers'

export default function baseElement(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Computed Porps
    it('should return theme components for `components` by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.components).toStrictEqual(el.vm.theme.components)
    })

    it('should return theme components merged with local components if `components` is defined', () => {
      let components = {
        ElementError: markRaw({
          name: 'CustomElementError',
          render(h) {
            return createElement(h, 'div', 'Hello')
          }
        })
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            components: components
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.components).toStrictEqual(Object.assign({}, el.vm.theme.components, components))
    })

    it('should return theme components merged with local components if `components` is set after rendering', async () => {
      let components = {
        ElementError: markRaw({
          name: 'CustomElementError',
          render(h) {
            return createElement(h, 'div', 'hello')
          }
        })
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.components = components

      expect(el.vm.schema.components).toStrictEqual(components)
      expect(el.vm.components).toStrictEqual(Object.assign({}, el.vm.theme.components, components))
    })

    // Template
    it('should replace component in template when `components` is defined', () => {
      let components = {
        ElementLabel: markRaw({
          name: 'CustomElementLabel',
          render(h) {
            return createElement(h, 'div', 'hello')
          }
        })
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            label: 'Label',
            components: components,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let ElementLabel = findAllComponents(el, { name: 'ElementLabel' })
      let CustomElementLabel = findAllComponents(el, { name: 'CustomElementLabel' })

      expect(ElementLabel.length).toBe(0)
      expect(CustomElementLabel.length).toBe(1)
    })

    it('should replace component in template when `components` change', async () => {
      let components = {
        ElementLabel: markRaw({
          name: 'CustomElementLabel',
          render(h) {
            return createElement(h, 'div', 'hello')
          }
        })
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            label: 'Label',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.components = components

      await nextTick()

      let ElementLabel = findAllComponents(el, { name: 'ElementLabel' })
      let CustomElementLabel = findAllComponents(el, { name: 'CustomElementLabel' })

      expect(ElementLabel.length).toBe(0)
      expect(CustomElementLabel.length).toBe(1)
    })
  }
}