import { nextTick } from 'vue'
import { markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement } from 'test-helpers'

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

    let el = form.vm.el$('el')

    expect(el.components).toStrictEqual(Object.assign({}, el.theme.components, components))
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

    let el = form.vm.el$('el')

    el.components = components

    expect(el.schema.components).toStrictEqual(components)
    expect(el.components).toStrictEqual(Object.assign({}, el.theme.components, components))
  })
}

export const rendering = function (elementType, elementName, options) {
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
          label: 'Element Label',
          components: components,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })
    let CustomElementLabel = findAllComponents(elWrapper, { name: 'CustomElementLabel' })

    expect(ElementLabel.length === 0 || ElementLabel.at(0).vm.label !== el.label).toBe(true)
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
          label: 'Element Label',
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    el.components = components

    await nextTick()

    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })
    let CustomElementLabel = findAllComponents(elWrapper, { name: 'CustomElementLabel' })

    expect(ElementLabel.length === 0 || ElementLabel.at(0).vm.label !== el.label).toBe(true)
    expect(CustomElementLabel.length).toBe(1)
  })
}