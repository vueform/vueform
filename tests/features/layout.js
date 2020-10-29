import { nextTick } from 'vue'
import { defineComponent, markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement } from 'test-helpers'

export default function layout(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Template
    it('should render element in `ElementLayout`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let ElementLayout = findAllComponents(el, { name: 'ElementLayout' })

      expect(ElementLayout.length).toBe(1)
    })

    it('should use custom `ElementLayout` if it is defined in `components`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            components: {
              ElementLayout: markRaw(defineComponent({
                name: 'CustomElementLayout',
                render(h) {
                  return createElement(h, 'div', 'hello')
                }
              }))
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let ElementLayout = findAllComponents(el, { name: 'ElementLayout' })
      let CustomElementLayout = findAllComponents(el, { name: 'CustomElementLayout' })

      expect(ElementLayout.length).toBe(0)
      expect(CustomElementLayout.length).toBe(1)
    })

    it('should use custom `ElementLayout` if it is defined in `components` after render', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.components = {
        ElementLayout: markRaw(defineComponent({
          name: 'CustomElementLayout',
          render(h) {
            return createElement(h, 'div', 'hello')
          }
        }))
      }

      await nextTick()

      let ElementLayout = findAllComponents(el, { name: 'ElementLayout' })
      let CustomElementLayout = findAllComponents(el, { name: 'CustomElementLayout' })

      expect(ElementLayout.length).toBe(0)
      expect(CustomElementLayout.length).toBe(1)
    })
  }
}