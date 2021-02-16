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

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLayout = findAllComponents(elWrapper, { name: 'ElementLayout' }).at(0)

    expect(ElementLayout.vm.el$.name).toBe('el')
  })

  it('should use custom layout`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          layout: markRaw(defineComponent({
            name: 'CustomElementLayout',
            render(h) {
              return createElement(h, 'div', 'hello')
            }
          }))
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.html()).toContain('hello')
  })
}