import { createForm, testPropDefault, createElement, destroy } from 'test-helpers'
import { markRaw } from 'vue'

export const isHtml = function (elementType, elementName, options) {
  
  it('should return true if content is string', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: 'some string',
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(el.isHtml).toBe(true)
  })
  
  it('should return true if content is string', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: markRaw({
            props: ['el$'],
            render(h) {
              return createElement(h, 'div', 'Hello')
            }
          }),
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    expect(el.isHtml).toBe(false)
  })
}


export const rendering = function (elementType, elementName, options) {
  it('should render html `content` in wrapper by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: '<div>Hello</div>'
        }
      }
    })

    expect(form.findComponent({ name: 'ElementLayout' }).exists()).toBe(true)
    expect(form.findComponent({ name: elementName }).html()).toContain('<div>Hello</div>')
    
    // destroy(form) // teardown
  })

  it('should not render layout if `wrap` false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: '<div>Hello</div>',
          wrap: false
        }
      }
    })

    expect(form.findComponent({ name: 'ElementLayout' }).exists()).toBe(false)
    expect(form.findComponent({ name: elementName }).html()).toContain('<div>Hello</div>')
  })
  
  it('should render Vue component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          content: markRaw({
            props: ['el$'],
            render(h) {
              return createElement(h, 'div', 'Hello')
            }
          }),
        }
      }
    })

    expect(form.findComponent({ name: elementName }).html()).toContain('<div>Hello</div>')

    // destroy() // teardown
  })
}