import { createForm, destroy } from 'test-helpers'

export const genericName = function (elementType, elementName, options) {
  
  it('should have `genericName` equal to filename if embedded & filename exists', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'File',
          embed: true,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('File')

    el.update('filename.jpg')

    expect(el.genericName).toStrictEqual('filename.jpg')
  })

  it('should have `genericName` equal to fieldName if not embedded or filename does not exist and fieldName is set', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fieldName: 'someFieldName',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('someFieldName')
    
    // destroy(form) // teardown
  })

  it('should have `genericName` equal to localized fieldName if not embedded or filename does not exist and fieldName is set and has multiple languages', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          fieldName: {
            en: 'fieldName-en',
            de: 'fieldName-de',
          }
        }
      },
      locale: 'de',
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('fieldName-de')
    
    // destroy(form) // teardown
  })

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

    el.$set(form.vm.vueform.schema.el, 'embed', true)

    expect(el.genericName).toStrictEqual('File')
    
    // destroy(form) // teardown
  })

  it('should have `genericName` equal to name of the element if embedded & filename & label does not exist or not embedded', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.genericName).toStrictEqual('El')

    el.$set(form.vm.vueform.schema.el, 'embed', true)

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

    expect(el.genericName).toStrictEqual(el.__('vueform.elements.file.defaultName'))

    el.$set(form.vm.vueform.schema[0], 'embed', true)

    expect(el.genericName).toStrictEqual(el.__('vueform.elements.file.defaultName'))

    // destroy() // teardown
  })
}