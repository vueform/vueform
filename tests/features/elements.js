import { createForm, findAllComponents, createElement } from 'test-helpers'
import { markRaw } from 'composition-api'

export default function elements (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    it('should return component from schema if defined for `component()`', () => {
      const component =  markRaw({
        name: elementName,
        render(h) {
          return createElement(h, 'div', 'hello')
        }
      })

      const childSchema = {
        type: 'text',
        component: component,
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.component(childSchema)).toStrictEqual(component)
    })

    it('should return component from theme by default for `component()`', () => {
      const childSchema = {
        type: 'text',
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.component(childSchema)).toStrictEqual(el.vm.theme.elements.TextElement)
    })

    it('should throw an error if element type\'s component does not exist in theme and not defined in schema', () => {
      const childSchema = {
        type: 'not-text',
      }

      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(() => {
        el.vm.component(childSchema)
      }).toThrowError()
    })
  }
}