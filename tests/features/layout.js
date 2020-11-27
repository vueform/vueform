import { nextTick } from 'vue'
import { defineComponent, markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement } from 'test-helpers'

export const layout = function (elementType, elementName, options) {
  it('should render element in `ElementLayout`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLayout = findAllComponents(elWrapper, { name: 'ElementLayout' })

    expect(ElementLayout.at(0).classes(el.defaultClasses.container)).toBe(true)
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

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLayout = findAllComponents(elWrapper, { name: 'ElementLayout' })
    let CustomElementLayout = findAllComponents(elWrapper, { name: 'CustomElementLayout' })

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

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    el.components = {
      ElementLayout: markRaw(defineComponent({
        name: 'CustomElementLayout',
        render(h) {
          return createElement(h, 'div', 'hello')
        }
      }))
    }

    await nextTick()

    let ElementLayout = findAllComponents(elWrapper, { name: 'ElementLayout' })
    let CustomElementLayout = findAllComponents(elWrapper, { name: 'CustomElementLayout' })

    expect(ElementLayout.length).toBe(0)
    expect(CustomElementLayout.length).toBe(1)
  })
}