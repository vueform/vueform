import { createForm, destroy } from 'test-helpers'

export const genericName = function (elementType, elementName, options) {
  // @todo later when multifile works
  // it('should have `genericName` equal to filename if embedded & filename exists', async () => {
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //         label: 'File',
  //       }
  //     }
  //   })

  //   let el = form.vm.el$('el')

  //   expect(el.genericName).toStrictEqual('File')

  //   const originalConsoleError = console.error
  //   const originalConsoleWarn = console.warn
  //   console.error = () => {}
  //   console.warn = () => {}

  //   el.$props.embed = true

  //   console.error = originalConsoleError
  //   console.warn = originalConsoleWarn

  //   el.update('filename')

  //   expect(el.genericName).toStrictEqual('filename')
  // })

  it('should have `genericName` equal to label if embedded & filename does not exist or not embedded and label exists', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'File',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('File')

    el.$set(form.vm.laraform.schema.el, 'embed', true)

    expect(el.genericName).toStrictEqual('File')
    
    // destroy(form) // teardown
  })

  it('should have `genericName` equal to name of the element if embedded & filename & label does not existor not embedded', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('El')

    el.$set(form.vm.laraform.schema.el, 'embed', true)

    expect(el.genericName).toStrictEqual('El')
    
    // destroy(form) // teardown
  })

  it('should be equal to defaultName if nothing else works', async () => {
    let form = createForm({
      schema: {
        0: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('0')

    expect(el.genericName).toStrictEqual(el.__('laraform.elements.file.defaultName'))

    el.$set(form.vm.laraform.schema[0], 'embed', true)

    expect(el.genericName).toStrictEqual(el.__('laraform.elements.file.defaultName'))

    // destroy() // teardown
  })
}