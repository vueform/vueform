import { createForm, findAllComponents, destroy } from 'test-helpers'

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


export const focused = function (elementType, elementName, options) {

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

    expect(el.editorEndpoint).toStrictEqual(form.vm.$vueform.config.endpoints.attachment.url)
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

export const editorMethod = function (elementType, elementName, options) {

  it('should equal to config value by default', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.editorMethod).toStrictEqual(form.vm.$vueform.config.endpoints.attachment.method)
  })


  it('should pass `method` to Editor component', () => {

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

    expect(Editor.props('method')).toStrictEqual(el.editorMethod)

    // destroy() // teardown
  })
}

//@todo:adam
export const hooks = function (elementType, elementName, options) {
  
  // it('should add event listener to focus on onMounted',  () => {
  //
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //       }
  //     }
  //   })
  //
  //   let editor$ = findAllComponents(form, { name: 'TrixEditor' }).at(0)
  //
  //   expect(editor$.emitted('trix-focus-hook')).toBeTruthy()
  // })

  // it('should add event listener to blur on onMounted',  () => {
  //
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //       }
  //     }
  //   })
  //
  //   let editor$ = findAllComponents(form, { name: 'TrixEditor' }).at(0)
  //
  //   expect(editor$.emitted('trix-blur-hook')).toBeTruthy()
  // })
}