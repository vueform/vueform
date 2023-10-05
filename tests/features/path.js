import { createForm, destroy } from 'test-helpers'
import { createElement, createInlineForm } from '../helpers'

export const parent = function (elementType, elementName) {
  
  it('should return `null` if has no direct parent', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.parent).toBe(null)
  })
  
  it('should return `el.parent.el$` if has parent or the parent element itself', () => {
    
    let form = createForm({
      schema: {
        parentOuter: {
          type: 'object',
          schema: {
            parentInner: {
              type: 'object',
              schema: {
                el: {
                  type: elementType
                }
              }
            }
          }
        }
      }
    })
    
    
    let el = form.vm.el$('parentOuter.parentInner.el')
    let parentInner = form.vm.el$('parentOuter.parentInner')
    
    expect(el.parent).toStrictEqual(el.parent.el$)
    expect(el.parent).toStrictEqual(parentInner)
  })
  
  it('should iterate through non vueform parent elements until a vueform element is found', () => {
    
    const { form } = createInlineForm({},{}, function(h) {
      return createElement(h, 'Vueform', {
        ref: 'form',
        scopedSlots: {
          default: createElement(h, 'ObjectElement', {
            props: {
              name: 'parent',
            }
          }, [
            createElement(h, 'div', [
              createElement(h, 'TextElement', {
                props: {
                  name: 'el'
                }
              })
            ])
          ])
        }
      })
    })
    
    const el = form.vm.el$('parent.el')
    const parent = form.vm.el$('parent')
    
    expect(el.parent).toBe(parent.el$)
  })
  
  it('should iterate through non vueform parent elements until a vueform element is found', () => {
    
    const { form } = createInlineForm({},{}, function(h) {
      return createElement(h, 'Vueform', {
        ref: 'form',
        scopedSlots: {
          default: createElement(h, 'div', [
            createElement(h, 'TextElement', {
              props: {
                name: 'el'
              }
            })
          ])
        }
      })
    })
    
    const el = form.vm.el$('el')
    
    expect(el.parent).toBe(null)
  })
}

export const path = function (elementType, elementName) {
  
  it('should have `path` equal to name if parent is not provided', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.path).toBe(el.name)
  })

  it('should have `path` equal to name with parent if parent is provided', () => {
  
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          schema: {
            el: {
              type: elementType,
            }
          }
        }
      }
    })

    let el = form.vm.el$('parent.el')

    expect(el.path).toBe('parent.el')
  })
}

export const dataPath = function (elementType, elementName) {
  
  it('should have `dataPath` equal to name if parent is not provided', () => {
  
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.dataPath).toBe(el.name)
  })
  
  it('should have `dataPath` equal to name with parent if parent is provided', () => {
    
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          schema: {
            el: {
              type: elementType,
            }
          }
        }
      }
    })
    
    let el = form.vm.el$('parent.el')
    
    expect(el.dataPath).toBe('parent.el')
  })
}

export const flat = function (elementType, elementName) {
  it('should have `flat` equal to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.flat).toBe(false)

    // destroy() // teardown
  })
}