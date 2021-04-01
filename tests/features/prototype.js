import { createForm, destroy } from 'test-helpers'

export const prototype = function (elementType, elementName, options) {
  let prototypes = options.prototypes

  it('should return element schema when element for `prototype`', () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual(prototypes[0].element)
    
    // destroy(form) // teardown
  })

  it('should return object schema when object for `prototype`', () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
        }, prototypes[1])
      }
    })

    let el = form.vm.el$('el')

    expect(el.prototype).toStrictEqual(Object.assign({}, prototypes[1].object, {
      type: 'object'
    }))

    // destroy() // teardown
  })
}

export const isObject = function (elementType, elementName, options) {
  let prototypes = options.prototypes

  it('should return "false" for `isObject` when element', () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
        }, prototypes[0])
      }
    })

    let el = form.vm.el$('el')

    expect(el.isObject).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should return "true" for `isObject` when object', () => {
    let form = createForm({
      schema: {
        el: Object.assign({}, {
          type: elementType,
        }, prototypes[1])
      }
    })

    let el = form.vm.el$('el')

    expect(el.isObject).toBe(true)

    // destroy() // teardown
  })
}