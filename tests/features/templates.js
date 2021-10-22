import { nextTick } from 'vue'
import { markRaw } from 'composition-api'
import { createForm, findAllComponents, createElement, testPropDefault, destroy } from 'test-helpers'

export const templates = function (elementType, elementName, options) {
  // Computed Porps
  it('should return theme templates for `templates` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.templates).toStrictEqual(el.theme.templates)    
    
    // destroy(form) // teardown
  })

  it('should return theme templates merged with local templates if `replaceTemplates` is defined', () => {
    let replaceTemplates = {
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
          replaceTemplates,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.templates).toStrictEqual(Object.assign({}, el.theme.templates, replaceTemplates))
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should replace component in template when `replaceTemplates` is defined', () => {
    let replaceTemplates = {
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
          replaceTemplates,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' }).at(0)

    expect(ElementLabel.html()).toContain('hello')
    
    // destroy(form) // teardown
  })
}