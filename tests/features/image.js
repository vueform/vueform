import { createForm } from 'test-helpers'

export {
  file, progress, preparing, auto, methods, endpoints, url, stage, filename,
  uploaded, canRemove, canUploadTemp, uploadTemp, remove, prepare, handleChange, handleClick,
  handleUploadTemp, handleRemove, handleAbort, rendering, } from './file'

export const base64 = function (elementType, elementName, options) {
  it('should `base64` be null by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.base64).toBe(null)
  })

  it('should not set `base64` when file changes if isImage is false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load(new File([''], 'a'))

    expect(el.base64).toBe(null)
  })
}

export const preview = function (elementType, elementName, options) {
  it('should `preview` be equal to "base64" when not uploaded', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.base64 = 'base64'

    expect(el.preview).toBe(el.base64)
  })

  it('should `preview` be equal to "link" when uploaded', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = 'filename.jpg'

    expect(el.preview).toBe(el.link)
  })
}

export const link = function (elementType, elementName, options) {
  it('should undefined for `link` if not in uploaded stage', () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.link).toStrictEqual(undefined)
  })
}

export const previewOptions = function (elementType, elementName, options) {
  it('should have `previewOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.previewOptions).toStrictEqual({
      link: el.link,
      uploaded: el.uploaded,
      filename: el.filename,
      preview: el.preview,
    })
  })
}