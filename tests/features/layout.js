import { createForm, findAllComponents, destroy } from 'test-helpers'

export const elementLayout = function (elementType, elementName, options) {
  it('should be ElementLayout by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let ElementLayout = findAllComponents(form, { name: 'ElementLayout' }).at(0)

    expect(ElementLayout.vm.el$).toStrictEqual(el)
    expect(el.elementLayout).toStrictEqual('ElementLayout')
    
    // destroy(form) // teardown
  })

  it('should be ElementLayoutInline if inline', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          inline: true,
        }
      }
    })

    let el = form.vm.el$('el')
    let ElementLayoutInline = findAllComponents(form, { name: 'ElementLayoutInline' }).at(0)

    expect(ElementLayoutInline.vm.el$).toStrictEqual(el)
    expect(el.elementLayout).toStrictEqual('ElementLayoutInline')
    
    // destroy(form) // teardown
  })

  it('should be custom if layout is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          layout: 'ElementLayoutInline'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.elementLayout).toStrictEqual('ElementLayoutInline')

    // destroy() // teardown
  })
}