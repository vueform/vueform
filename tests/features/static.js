import { createForm, testPropDefault, createElement } from 'test-helpers'
import { markRaw } from 'composition-api'

export const wrap = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'wrap', true, false)
}

export const rendering = function (elementType, elementName, options) {
  it('should render html `content` in wrapper by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: '<b>Hello</b>'
        }
      }
    })

    expect(form.findComponent({ name: 'ElementLayout' }).exists()).toBe(true)
    expect(form.findComponent({ name: elementName }).html()).toContain('<b>Hello</b>')
  })

  it('should not render layout if `wrap` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: '<b>Hello</b>',
          wrap: false
        }
      }
    })

    expect(form.findComponent({ name: 'ElementLayout' }).exists()).toBe(false)
    expect(form.findComponent({ name: elementName }).html()).toContain('<b>Hello</b>')
  })
  
  it('should render Vue component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: markRaw({
            props: ['el$'],
            render(h) {
              return createElement(h, 'b', 'Hello')
            }
          }),
        }
      }
    })

    expect(form.findComponent({ name: elementName }).html()).toContain('<b>Hello</b>')
  })
}