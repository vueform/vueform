import { createForm, findAllComponents, testPropDefault, testAttribute, destroy } from 'test-helpers'

export const accept = function (elementType, elementName, options) {
  it('should pass `accept` to Editor component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          accept: ['jpg', 'png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Editor = findAllComponents(elWrapper, { name: 'EditorWrapper' }).at(0)

    expect(Editor.props('accept')).toStrictEqual(el.accept)

    // destroy() // teardown
  })
}

export const acceptMimes = function (elementType, elementName, options) {
  it('should pass `acceptMimes` to Editor component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          acceptMimes: ['image/jpeg', 'image/png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Editor = findAllComponents(elWrapper, { name: 'EditorWrapper' }).at(0)

    expect(Editor.props('acceptMimes')).toStrictEqual(el.acceptMimes)

    // destroy() // teardown
  })
}

export const editorEndpoint = function (elementType, elementName, options) {
  it('should equal to config value by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.editorEndpoint).toStrictEqual(form.vm.$laraform.config.endpoints.elements.editor.attachment)
  })
  
  it('should pass `endpoint` to Editor component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Editor = findAllComponents(elWrapper, { name: 'EditorWrapper' }).at(0)

    expect(Editor.props('endpoint')).toStrictEqual(el.editorEndpoint)

    // destroy() // teardown
  })
}