import { nextTick } from 'vue'
import { markRaw } from 'vue'
import { createForm, findAllComponents, createElement, testPropDefault, destroy } from 'test-helpers'
import defaultTheme from './../../themes/vueform'

export const Templates = function (elementType, elementName, options) {
  
  it('should be theme templates by default', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Templates).toEqual(el.theme.templates)
  })

  it('should be merged with preset templates', () => {
  
    let template = {
      ...defaultTheme.templates[elementName],
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          presets: ['preset']
        }
      }
    }, {
      config: {
        presets: {
          preset: {
            templates: {
              [elementName]: template
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Templates).toEqual({
      ...el.theme.templates,
      [elementName]: template
    })
  })

  it('should be merged with templates', () => {
  
    let template = {
      ...defaultTheme.templates[elementName],
    }

    let template2 = {
      ...defaultTheme.templates.ElementLabel,
      name: 'ElementLabel2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          presets: ['preset'],
          templates: {
            ElementLabel: template2
          }
        }
      }
    }, {
      config: {
        presets: {
          preset: {
            templates: {
              [elementName]: template
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Templates).toEqual({
      ...defaultTheme.templates,
      [elementName]: template,
      ElementLabel: template2,
    })
  })
}

export const template = function (elementType, elementName, options) {
  it('should be base template', async () => {
    let form = createForm({
      schema: {
        el: { type: elementType }
      }
    })

    let el = form.vm.el$('el')

    expect(el.template).toStrictEqual(el.Templates[elementName])
  })

  it('should be base template if view does not exist', async () => {
    let form = createForm({
      schema: {
        el: { type: elementType, view: 'dark' },
      },
    })

    let el = form.vm.el$('el')

    expect(el.template).toStrictEqual(el.Templates[elementName])
  })

  it('should be view template', async () => {
    let dark = {
      ...defaultTheme.templates[elementName],
    }

    let form = createForm({
      schema: {
        el: { type: elementType, view: 'dark', },
      },
    }, {
      config: {
        templates: {
          [`${elementName}_dark`]: dark
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.template).toStrictEqual(el.Templates[`${elementName}_dark`])
  })
}


export const rendering = function (elementType, elementName, options) {
  it('should replace component in template when `templates` is defined', () => {
    let templates = {
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
          templates,
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