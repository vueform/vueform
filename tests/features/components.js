import { nextTick } from 'vue'
import { markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement, testPropDefault } from 'test-helpers'

export const components = function (elementType, elementName, options) {
  // Computed Porps
  it('should return theme components for `components` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.components).toStrictEqual(el.theme.components)
  })

  it('should return theme components merged with local components if `overrideComponents` is defined', () => {
    let overrideComponents = {
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
          overrideComponents,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.components).toStrictEqual(Object.assign({}, el.theme.components, overrideComponents))
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should replace component in template when `overrideComponents` is defined', () => {
    let overrideComponents = {
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
          label: 'Element Label',
          overrideComponents,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' }).at(0)

    expect(ElementLabel.html()).toContain('hello')
  })
}