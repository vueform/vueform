import { createForm, findAllComponents, findAll, destroy, createValidImageFile } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick, markRaw } from 'vue'
import flushPromises from 'flush-promises'

jest.useFakeTimers()

expect.extend({toBeVisible})

export const hasUploadError = function (elementType, elementName, options) {
  
  it('should be false by default', async () => {
    
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.hasUploadError).toBe(false)
  })
  
  it('should set `hasUploadError` to true if axios is aborted', async () => {
    
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    try {
      let axiosPostMock = jest.fn(() => {
        return {
          data: {
            tmp: 'tmp123',
            originalName: 'filename.jpg'
          }
        }
      })
      
      el.axios.request = axiosPostMock
      el.axios.isCancel = () => true
      el.axios.CancelToken = {
        source: () => {
          return {
            token: 'asdf',
            cancel: () => {
              throw new Error('Cancelled')
            }
          }
        }
      }
      
      let file = new File([''], 'filename')
      
      el.load(file)
      
      el.prepare()
      
      expect(el.hasUploadError).toBe(12)
      
      await nextTick()
      
      el.handleAbort()
      
      await nextTick()
    } catch (e) {}
  })
}

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
    
    await nextTick()
    await flushPromises()
    
    expect(el.base64).toBe(null)
    
    // destroy() // teardown
  })
}

export const progress = function (elementType, elementName, options) {
  it('should `progress` be 0 by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.progress).toBe(0)
    
    // destroy() // teardown
  })
}

export const preparing = function (elementType, elementName, options) {
  it('should `preparing` be false by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.preparing).toBe(false)
  })
}

export const watchers = function (elementType, elementName, options) {
  
  it('should have value and view keys', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.watchers.value).not.toBe(undefined)
    expect(el.watchers.view).not.toBe(undefined)
  })
  
  //@todo:szm fileReader can not be mocked
  // it('should have thumbnail if image or gallery', async () => {
  //
  //   const file = await createValidImageFile()
  //
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //         view: 'file',
  //       }
  //     }
  //   })
  //
  //   let el = form.vm.el$('el')
  //
  //   el.load(new File([file], 'file.jpg'))
  //
  //   await nextTick()
  //
  //   el.$set(form.vm.vueform.schema.el, 'view', 'image')
  //   //@todo
  // })
  //
  // it('should invoke resolveBase64 if imageType is true, view is not file and either has value of file or __file__', async () => {
  //
  //   const requestStub = jest.fn(() => {
  //     return {
  //       tmp: 'tmp_name',
  //       originalName: 'filename.jpg',
  //     }
  //   })
  //
  //   const validFile = await createValidImageFile()
  //
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //         auto: true,
  //         onBeforeCreate(el$) {
  //           el$.$vueform.services.axios.request = requestStub
  //         },
  //       }
  //     }
  //   })
  //
  //   let el = form.vm.el$('el')
  //
  //   await el.handleChange({
  //     target: {
  //       files: [
  //         validFile
  //       ]
  //     }
  //   })
  //
  //   await flushPromises()
  //
  //
  //   expect(el.value instanceof File).toBe(true)
  //   // destroy(form) // teardown
  //   //@todo
  // })
}


export const endpoints = function (elementType, elementName, options) {
  
  const fileMethods = ['uploadTempFile', 'removeTempFile', 'removeFile']
  const endpointTypes = ['uploadTempEndpoint', 'removeTempEndpoint', 'removeEndpoint']
  
  it('should return `url` for url if defined within prop and prop is object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          uploadTempEndpoint: {
            url: '/some-url',
            method: 'method',
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.endpoints.uploadTempFile).toEqual({
      url: '/some-url',
      method: 'method',
    })
  })
  
  it('should return `endpoint` for url if defined within prop and prop is object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          uploadTempEndpoint: {
            endpoint: '/some-url',
            method: 'method',
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.endpoints.uploadTempFile).toEqual({
      url: '/some-url',
      method: 'method',
    })
  })
  
  it('should return default form config for url if url is not defined within prop and prop is object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          uploadTempEndpoint: {
            method: 'method',
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.endpoints.uploadTempFile).toEqual({
      url: form.vm.$vueform.config.endpoints.uploadTempFile.url,
      method: 'method',
    })
  })
  
  it('should return default form config for method if method is not defined within prop and prop is object', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          uploadTempEndpoint: {
            url: '/some-url',
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.endpoints.uploadTempFile).toEqual({
      url: '/some-url',
      method: form.vm.$vueform.config.endpoints.uploadTempFile.method,
    })
  })
  
  fileMethods.forEach((fileMethod) => {
    
    it(`should return default from config form ${fileMethod}`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod]).toEqual(form.vm.$vueform.config.endpoints[fileMethod])
    })
  })
  
  fileMethods.forEach((fileMethod) => {
    
    it(`should return custom from urls & methods ${fileMethod}`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            urls: {
              [fileMethod]: '/upload-temp'
            },
            methods: {
              [fileMethod]: 'method'
            },
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod]).toEqual({
        url: '/upload-temp',
        method: 'method',
      })
    })
  })
  
  fileMethods.forEach((fileMethod, index) => {
    
    it(`should return custom endpoint from '${fileMethod}' object`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            [endpointTypes[index]]: {
              url: '/upload-temp',
              method: 'method'
            },
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod]).toEqual({
        url: '/upload-temp',
        method: 'method',
      })
    })
  })
  
  fileMethods.forEach((fileMethod, index) => {
    
    it(`should return custom endpoint from '${fileMethod}' string url`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            [endpointTypes[index]]: '/upload-temp',
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod]).toEqual({
        url: '/upload-temp',
        method: form.vm.$vueform.config.endpoints[fileMethod].method,
      })
    })
  })
  
  fileMethods.forEach((fileMethod, index) => {
    
    it(`should return custom endpoint from '${fileMethod}' named endpoint`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            [endpointTypes[index]]: 'custom',
          }
        }
      }, {
        config: {
          endpoints: {
            custom: {
              url: '/custom',
              method: 'custom'
            }
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod]).toEqual({
        url: '/custom',
        method: 'custom',
      })
    })
  })
  
  fileMethods.forEach((fileMethod, index) => {
    
    it(`should return custom endpoint from '${fileMethod}' function`, () => {
      
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            [endpointTypes[index]]: (a, b) => a + b,
          }
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(el.endpoints[fileMethod](1,2)).toEqual(3)
    })
  })
}

export const fileUrl = function (elementType, elementName, options) {
  
  it('should return `/` if `url` is not defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toStrictEqual('/')
  })
  
  it('should return `` as default if `url` is set to false', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toEqual('')
  })
  
  it('should set `fileUrl` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: '/uploads/',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toStrictEqual('/uploads/')
    
    // destroy(form) // teardown
  })
  
  it('should prefix `fileUrl` without starting /', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: 'uploads/',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toStrictEqual('/uploads/')
    
    // destroy(form) // teardown
  })
  
  it('should not prefix `fileUrl` if starts with http', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: 'https://domain.com',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toStrictEqual('https://domain.com/')
    
    // destroy(form) // teardown
  })
  
  it('should suffix `fileUrl` without ending /', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: '/uploads',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.fileUrl).toStrictEqual('/uploads/')
    
    // destroy() // teardown
  })
}

export const stage = function (elementType, elementName, options) {
  it('should return 0 for `stage` if value is null', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.stage).toStrictEqual(0)
    
    // destroy(form) // teardown
  })
  
  it('should return 1 for `stage` if file is instance of File', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load(new File([''], 'filename'))
    
    expect(el.stage).toStrictEqual(1)
    
    // destroy(form) // teardown
  })
  
  it('should return 2 for `stage` if value is a tmp object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    })
    
    expect(el.stage).toStrictEqual(2)
    
    // destroy(form) // teardown
  })
  
  it('should return 3 for `stage` if value is a string', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load('filename.jpg')
    
    expect(el.stage).toStrictEqual(3)
    
    // destroy(form) // teardown
  })
  
  it('should -1 for `stage` if value is an unknown format', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load(['a'])
    
    expect(el.stage).toBe(-1)
    
    // destroy() // teardown
  })
}

export const filename = function (elementType, elementName, options) {
  it('should return null as `filename` if in stage 0', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.filename).toStrictEqual(null)
    
    // destroy(form) // teardown
  })
  
  it('should return `filename` in stage 1', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load(new File([''], 'filename'))
    
    expect(el.stage).toStrictEqual(1)
    expect(el.filename).toStrictEqual('filename')
    
    // destroy(form) // teardown
  })
  
  it('should return `filename` in stage 2', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.stage).toStrictEqual(2)
    expect(el.filename).toStrictEqual('filename')
    
    // destroy(form) // teardown
  })
  
  it('should return `filename` in stage 3', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load('filename')
    
    expect(el.stage).toStrictEqual(3)
    expect(el.filename).toStrictEqual('filename')
    
    // destroy() // teardown
  })
}

export const link = function (elementType, elementName, options) {
  it('should undefined for `link` if not in uploaded stage', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.link).toStrictEqual(undefined)
    
    // destroy(form) // teardown
  })
}

export const preview = function (elementType, elementName, options) {
  it('should `preview` be equal to "base64" when not uploaded and image', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'image',
          templates: {
            FilePreview_image: markRaw({
              props: ['previewOptions'],
              render() {
                return '<div>Preview</div>'
              }
            })
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.base64 = 'base64'
    expect(el.preview).toBe(el.base64)
    
    // destroy(form) // teardown
  })
  
  it('should `preview` be equal to "link" when uploaded and image', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          view: 'image',
          templates: {
            FilePreview_image: markRaw({
              props: ['previewOptions'],
              render() {
                return '<div>Preview</div>'
              }
            })
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.value = 'filename.jpg'
    
    expect(el.preview).toBe(el.link)
    
    await flushPromises()
    
    destroy(form) // teardown
  })
  
  it('should `preview` be null when not image', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.value = 'filename.jpg'
    
    expect(el.preview).toBe(null)
    
    // destroy() // teardown
  })
}

export const uploaded = function (elementType, elementName, options) {
  it('should have `uploaded` true if in stage 3', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.stage).not.toStrictEqual(3)
    expect(el.uploaded).toStrictEqual(false)
    
    el.load('filename')
    
    expect(el.stage).toStrictEqual(3)
    expect(el.uploaded).toStrictEqual(true)
    
    // destroy() // teardown
  })
}

export const canRemove = function (elementType, elementName, options) {
  it('should false for `canRemove` if stage is 0', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.canRemove).toStrictEqual(false)
    
    // destroy(form) // teardown
  })
  
  it('should true for `canRemove` if stage is > 0 & not uploading', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    
    expect(el.canRemove).toStrictEqual(true)
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.canRemove).toStrictEqual(true)
    
    el.load('filename')
    
    expect(el.canRemove).toStrictEqual(true)
    
    // destroy(form) // teardown
  })
  
  it('should false for `canRemove` if stage is > 0 & uploading', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.request = {}
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load('filename')
    
    expect(el.canRemove).toStrictEqual(false)
    
    // destroy(form) // teardown
  })
  
  it('should false for `canRemove` if stage is > 0 & disabled', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          disabled: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load('filename')
    
    expect(el.canRemove).toStrictEqual(false)
    
    // destroy(form) // teardown
  })
  
  it('should false for `canRemove` if stage is > 0 & preparing', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.preparing = true
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load('filename')
    
    expect(el.canRemove).toStrictEqual(false)
    
    // destroy(form) // teardown
  })
  
  it('should false for `canRemove` if stage is > 0 & removing', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.removing = true
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    expect(el.canRemove).toStrictEqual(false)
    
    el.load('filename')
    
    expect(el.canRemove).toStrictEqual(false)
    
    // destroy() // teardown
  })
}

export const canUploadTemp = function (elementType, elementName, options) {
  it('should have true for `canUploadTemp` if stage is 1, not uploading and not auto', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.canUploadTemp).toStrictEqual(false)
    
    el.load(new File([''], 'filename'))
    await nextTick()
    expect(el.canUploadTemp).toStrictEqual(true)
    
    el.request = {}
    expect(el.canUploadTemp).toStrictEqual(false)
    
    el.request = null
    expect(el.canUploadTemp).toStrictEqual(true)
    
    el.$set(form.vm.vueform.schema.el, 'auto', true)
    await nextTick()
    expect(el.canUploadTemp).toStrictEqual(false)
    
    el.$set(form.vm.vueform.schema.el, 'auto', false)
    await nextTick()
    expect(el.canUploadTemp).toStrictEqual(true)
    
    el.load('filename')
    expect(el.canUploadTemp).toStrictEqual(false)
    
    // destroy() // teardown
  })
}

export const uploadTemp = function (elementType, elementName, options) {
  
  it('should use get instead of post as method', async () => {
    
    const requestMock = jest.fn(() => ({
      data: {
        tmp: 'tmp_name',
        originalName: 'filename.jpg',
      }
    }))
    
    const form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          uploadTempEndpoint: {
            method: 'GET'
          },
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })
    
    
    const el = form.vm.el$('el')
    
    await el.handleChange({
      target: {
        files: [
          new File([''], 'file.jpg')
        ]
      }
    })
    
    await nextTick()
    await flushPromises()
    
    expect(requestMock.mock.calls[0][0].method).toBe('get')
  })
  
  it('should throw an error in `uploadTemp` if not in stage 1', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    })
    
    expect(el.stage).toBe(2)
    
    let catchMock = jest.fn()
    
    expect(catchMock).not.toHaveBeenCalled()
    
    el.uploadTemp().catch((e) => { catchMock() })
    
    await flushPromises()
    
    expect(catchMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
  
  it('should abort `uploadTemp` if invalid', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required|min:30'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    el.axios.request = axiosMock
    
    el.load(new File([''], 'filename'))
    
    expect(el.stage).toBe(1)
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    el.uploadTemp()
    
    await flushPromises()
    
    expect(axiosMock).not.toHaveBeenCalled()
    axiosMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should send file to default endpoint with params & update with return value in `uploadTemp`', async () => {
    let form = createForm({
      formKey: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
          params: {
            param: 'value'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    let axiosMock = jest.fn(() => {
      return {
        data: tmp
      }
    })
    
    el.axios.request = axiosMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    expect(el.stage).toBe(1)
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(file)
    
    el.uploadTemp()
    
    await flushPromises()
    
    expect(axiosMock).toHaveBeenCalled()
    
    expect(axiosMock.mock.calls[0][0].data instanceof FormData).toBe(true)
    expect(axiosMock.mock.calls[0][0].data.get('file')).toStrictEqual(file)
    expect(axiosMock.mock.calls[0][0].data.get('formKey')).toStrictEqual('key')
    expect(axiosMock.mock.calls[0][0].data.get('path')).toStrictEqual('el')
    expect(axiosMock.mock.calls[0][0].data.get('param')).toStrictEqual('value')
    expect(axiosMock.mock.calls[0][0].url).toBe(form.vm.$vueform.config.endpoints.uploadTempFile.url)
    expect(axiosMock.mock.calls[0][0].method).toBe(form.vm.$vueform.config.endpoints.uploadTempFile.method)
    
    expect(el.value).toStrictEqual(tmp)
    axiosMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should send file to default function endpoint', async () => {
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    let uploadMock = jest.fn(() => {
      return tmp
    })
    
    let form = createForm({
      formKey: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
          params: {
            param: 'value'
          }
        }
      }
    }, {
      config: {
        endpoints: {
          uploadTempFile: uploadMock
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'filename')
    
    el.load(file)
    el.uploadTemp()
    
    await flushPromises()
    
    expect(uploadMock.mock.calls[0][0]).toBe(file)
    expect(uploadMock.mock.calls[0][1]).toEqual(el)
    expect(el.value).toStrictEqual(tmp)
    
    uploadMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should send file', async () => {
    let form = createForm({
      formKey: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
          params: {
            param: 'value'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    let axiosMock = jest.fn(() => {
      return {
        data: tmp
      }
    })
    
    el.axios.request = axiosMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    expect(el.stage).toBe(1)
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(file)
    
    el.uploadTemp()
    
    await flushPromises()
    
    expect(axiosMock).toHaveBeenCalled()
    
    expect(axiosMock.mock.calls[0][0].data instanceof FormData).toBe(true)
    expect(axiosMock.mock.calls[0][0].data.get('file')).toStrictEqual(file)
    expect(axiosMock.mock.calls[0][0].data.get('formKey')).toStrictEqual('key')
    expect(axiosMock.mock.calls[0][0].data.get('path')).toStrictEqual('el')
    expect(axiosMock.mock.calls[0][0].data.get('param')).toStrictEqual('value')
    
    expect(el.value).toStrictEqual(tmp)
    axiosMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should add __file__ to response if response is an object', async () => {
    
    const postStub = jest.fn(() => ({
      data: {
        tmp: 'tmp_name',
        originalName: 'filename.jpg',
      }
    }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = postStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    let file = new File([''], 'file.jpg')
    
    await el.handleChange({
      target: {
        files: [file]
      }
    })
    //todo:szm
    // expect(el.value.el[0].__file__).toBeTruthy()
  })
  
  it('should set `progress` during `uploadTemp`', async () => {
    let form = createForm({
      key: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    let axiosMock = jest.fn((options) => {
      if (options && options.onUploadProgress) {
        options.onUploadProgress({
          loaded: 80,
          total: 100,
        })
      }
      
      return {
        data: tmp
      }
    })
    
    el.axios.request = axiosMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    el.uploadTemp()
    
    await flushPromises()
    
    expect(el.progress).toBe(80)
    axiosMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should set progress to 0 on `uploadTemp` if the response is an error', async () => {
    let form = createForm({
      key: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn((url,data,options) => {})
    
    el.axios.request = axiosMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    let catchMock = jest.fn()
    
    el.uploadTemp().catch((e) => { catchMock() })
    
    await flushPromises()
    
    expect(catchMock).toHaveBeenCalled()
    catchMock.mockRestore()
    
    // destroy(form) // teardown
  })
  
  it('should call "updated" on successful `uploadTemp`', async () => {
    let onChangeMock = jest.fn()
    
    let form = createForm({
      key: 'key',
      schema: {
        el: {
          type: elementType,
          auto: false,
          onChange: onChangeMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    el.axios.request = jest.fn(() => {
      return {
        data: tmp
      }
    })
    
    let file = new File([''], 'filename')
    
    el.value = file
    
    await nextTick()
    
    el.uploadTemp()
    
    await flushPromises()
    
    expect(onChangeMock).toHaveBeenCalledWith(tmp, file, el)
    
    // destroy() // teardown
  })
  
  //@todo:adam handleChange has to be async and await uploadTemp()
  /*it('should invoke handleError and set progress to 0 if uploadTemp fails by any means', async () => {
    
    const requestStub = jest.fn()
    
    let form = createForm({
      
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: true,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestStub
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    const file = new File([''], 'file.jpg')
    
    await expect(async () => {
      
      await el.handleChange({
        target: {
          files: [
            file
          ]
        }
      })
      
      await flushPromises()
    }).rejects.toThrowError()
    
    expect(el.progress).toBe(0)
    expect(el.hasUploadError).toBe(true)
  })*/
}

export const remove = function (elementType, elementName, options) {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    jest.spyOn(window, 'confirm').mockImplementation(() => true)
    
    // destroy(form) // teardown
  })
  
  it('should use get instead of post as method on removeFile (stage 3)', async () => {
    
    const requestMock = jest.fn()
    
    const form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          removeEndpoint: {
            method: 'GET'
          },
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })
    
    
    const el = form.vm.el$('el')
    
    el.load('filename.jpg')
    
    await nextTick()
    
    await el.remove()
    
    await flushPromises()
    
    expect(requestMock.mock.calls[0][0].method).toBe('get')
  })
  
  it('should use get instead of post as method on removeTempFile (stage 2)', async () => {
    
    const requestMock = jest.fn(() => ({
      data: {
        tmp: 'tmp_name',
        originalName: 'filename.jpg',
      }
    }))
    
    const form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          removeTempEndpoint: {
            method: 'GET'
          },
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })
    
    
    const el = form.vm.el$('el')
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })
    
    await el.remove()
    
    await flushPromises()
    
    expect(requestMock.mock.calls[0][0].method).toBe('get')
  })
  
  it('should set file null on `remove` in stage 1', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    expect(el.stage).toBe(1)
    expect(el.value).toStrictEqual(file)
    
    el.remove()
    
    expect(el.value).toStrictEqual(null)
    
    // destroy(form) // teardown
  })
  
  it('should validate file when `remove` if `validateOn` contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
          default: new File(['filename.jpg'], 'filename.jpg'),
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.validated).toBe(false)
    
    el.remove()
    
    await flushPromises()
    
    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })
  
  it('should not validate file when `remove` if `validateOn` does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.validated).toBe(false)
    
    el.remove()
    
    await flushPromises()
    
    expect(el.validated).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should set `progress` to 0 on `remove`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.progress = 60
    
    expect(el.progress).toBe(60)
    
    el.remove()
    
    expect(el.progress).toBe(0)
    
    // destroy(form) // teardown
  })
  
  it('should set "removing" true when `remove` starts and false when finishes even with an error', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.axios.request = jest.fn(() => Promise.reject({ data: 'value' }))
    
    el.load({
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    })
    
    el.remove()
    
    expect(el.removing).toBe(true)
    
    await flushPromises()
    
    expect(el.removing).toBe(false)
    
    el.axios.request = jest.fn(() => Promise.resolve({ data: 'value' }))
    
    el.remove()
    
    expect(el.removing).toBe(true)
    
    await flushPromises()
    
    expect(el.removing).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should emit `remove` event on `remove`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    el.remove()
    
    expect(elWrapper.emitted().remove).toBeTruthy()
    
    // destroy(form) // teardown
  })
  
  it('should call remove temp endpoint with params when removed in stage 2', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          params: {
            param: 'value'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    el.axios.request = axiosMock
    
    el.load(tmp)
    
    expect(el.stage).toBe(2)
    
    el.remove()
    
    await flushPromises()
    
    expect(axiosMock.mock.calls[0][0].url).toEqual(el.endpoints.removeTempFile.url)
    expect(axiosMock.mock.calls[0][0].method).toEqual(el.endpoints.removeTempFile.method)
    expect(axiosMock.mock.calls[0][0].data).toEqual({
      file: tmp.tmp,
      formKey: null,
      path: 'el',
      param: 'value'
    })
    
    // destroy(form) // teardown
  })
  
  it('should call remove temp function endpoint with params when removed in stage 2', async () => {
    
    let endpointMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          params: {
            param: 'value'
          }
        }
      }
    }, {
      config: {
        endpoints: {
          removeTempFile: endpointMock
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    el.load(tmp)
    
    expect(el.stage).toBe(2)
    
    el.remove()
    
    await flushPromises()
    
    expect(endpointMock.mock.calls[0][0]).toEqual(tmp)
    expect(endpointMock.mock.calls[0][1]).toEqual(el)
    
    // destroy(form) // teardown
  })
  
  it('should not call remove temp endpoint when removed in stage 2 softRemove=true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          softRemove: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    el.axios.request = axiosMock
    
    el.load(tmp)
    
    expect(el.stage).toBe(2)
    
    el.remove()
    
    await flushPromises()
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    expect(el.value).toBe(null)
    
    // destroy(form) // teardown
  })
  
  it('should not remove file and null progress when removed in stage 2 with error', async () => {
    let errorMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onError: errorMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn(() => Promise.reject({ data: 'value' }))
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    el.axios.request = axiosMock
    
    el.progress = 100
    el.load(tmp)
    
    expect(el.stage).toBe(2)
    
    el.remove()
    
    await flushPromises()
    
    expect(errorMock).toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(tmp)
    expect(el.progress).toStrictEqual(100)
    
    // destroy(form) // teardown
  })
  
  it('should call remove file endpoint with params when removed in stage 3', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          params: {
            param: 'value'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    let file = 'filename.jpg'
    
    el.axios.request = axiosMock
    
    el.load(file)
    
    expect(el.stage).toBe(3)
    
    el.remove()
    
    expect(axiosMock.mock.calls[0][0].url).toEqual(el.endpoints.removeFile.url)
    expect(axiosMock.mock.calls[0][0].method).toEqual(el.endpoints.removeFile.method)
    expect(axiosMock.mock.calls[0][0].data.file).toEqual(file)
    expect(axiosMock.mock.calls[0][0].data.formKey).toEqual(null)
    expect(axiosMock.mock.calls[0][0].data.path).toEqual('el')
    expect(axiosMock.mock.calls[0][0].data.param).toEqual('value')
    
    // destroy(form) // teardown
  })
  
  it('should call remove file function endpoint with params when removed in stage 3', () => {
    let endpointMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          params: {
            param: 'value'
          },
          removeEndpoint: endpointMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = 'filename.jpg'
    
    el.load(file)
    
    expect(el.stage).toBe(3)
    
    el.remove()
    
    expect(endpointMock.mock.calls[0][0]).toEqual(file)
    expect(endpointMock.mock.calls[0][1]).toEqual(el)
    
    // destroy(form) // teardown
  })
  
  it('should not call remove file endpoint when removed in stage 3 softRemove=true', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          softRemove: true,
          params: {
            param: 'value'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    let file = 'filename.jpg'
    
    el.axios.request = axiosMock
    
    el.load(file)
    
    expect(el.stage).toBe(3)
    
    el.remove()
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    expect(el.value).toBe(null)
    
    // destroy(form) // teardown
  })
  
  it('should not call remove file endpoint when removed and does not confirm in stage 3', () => {
    jest.spyOn(window, 'confirm').mockImplementation(() => false)
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn()
    
    let file = 'filename.jpg'
    
    el.axios.request = axiosMock
    
    el.load(file)
    
    expect(el.stage).toBe(3)
    
    el.remove()
    
    expect(axiosMock).not.toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
  
  it('should not remove file and null progress when removed in stage 2 with error', async () => {
    let errorMock = jest.fn()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onError: errorMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosMock = jest.fn(() => Promise.reject({ data: 'value' }))
    
    let tmp = 'filename.jpg'
    
    el.axios.request = axiosMock
    
    el.progress = 100
    el.load(tmp)
    
    expect(el.stage).toBe(3)
    
    el.remove()
    
    await flushPromises()
    
    expect(errorMock).toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(tmp)
    expect(el.progress).toStrictEqual(100)
    
    // destroy(form) // teardown
  })
  
  it('should call "updated" when `handleChange` updates value', async () => {
    let onChangeMock = jest.fn()
    
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          onChange: onChangeMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let file = new File([''], 'filename.jpg')
    
    el.value = file
    
    await nextTick()
    
    el.remove()
    
    await nextTick()
    
    expect(onChangeMock).toHaveBeenLastCalledWith(null, file, el)
    
    // destroy(form) // teardown
  })
  
  it('should `remove` trigger "remove" event', async () => {
    let onRemoveMock = jest.fn()
    
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          onRemove: onRemoveMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let file = new File([], 'filename.jpg')
    
    el.load(file)
    
    await nextTick()
    
    el.remove()
    
    await nextTick()
    
    expect(onRemoveMock).toHaveBeenCalled()
    
    // destroy() // teardown
  })
}

export const prepare = function (elementType, elementName, options) {
  it('should not call `uploadTemp` in `prepare` if stage is not 1', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }
    
    let postMock = jest.fn()
    
    el.axios.request = postMock
    
    el.load(tmp)
    
    expect(el.validated).toBe(false)
    
    expect(el.stage).toBe(2)
    
    el.prepare()
    
    await flushPromises()
    
    expect(postMock).not.toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
  
  it('should call `uploadTemp` in `prepare` if stage is 1', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.axios.request = jest.fn(() => {
      return {
        data: {
          tmp: 'tmp123',
          originalName: 'filename.jpg'
        }
      }
    })
    
    el.load(new File([''], 'filename'))
    
    expect(el.validated).toBe(false)
    
    expect(el.stage).toBe(1)
    
    el.prepare()
    
    await flushPromises()
    
    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })
  
  it('should set `preparing` to true when `prepare` and set to false after', async () => {
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosPostMock = jest.fn(() => {
      return {
        data: {
          tmp: 'tmp123',
          originalName: 'filename.jpg'
        }
      }
    })
    
    el.axios.request = axiosPostMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    el.prepare()
    
    expect(el.preparing).toBe(true)
    
    await flushPromises()
    
    expect(el.preparing).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should set preparing to false element if `prepare` fails', async () => {
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    try {
      let axiosPostMock = jest.fn(() => {
        return {
          data: {
            tmp: 'tmp123',
            originalName: 'filename.jpg'
          }
        }
      })
      
      el.axios.request = axiosPostMock
      el.axios.isCancel = () => true
      el.axios.CancelToken = {
        source: () => {
          return {
            token: 'asdf',
            cancel: () => {
              throw new Error('Cancelled')
            }
          }
        }
      }
      
      let file = new File([''], 'filename')
      
      el.load(file)
      
      el.prepare()
      
      expect(el.preparing).toBe(true)
      
      await nextTick()
      
      el.handleAbort()
      
      await nextTick()
    } catch (e) {
      await nextTick()
      await nextTick()
      
      expect(el.preparing).toBe(false)
    }
    
    // destroy() // teardown
  })
}

export const handleChange = function (elementType, elementName, options) {
  
  it('should call uploadTemp on `handleChange` if auto is true', async () => {
    
    const requestMock = jest.fn(() => ({data:{}}))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'file.jpg')
    
    await el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })
    
    await flushPromises()
    
    expect(requestMock).toHaveBeenCalled()
  })
  
  it('should update file when `handleChange` is triggered', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'filaname')
    
    expect(el.value).toBe(null)
    
    await el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })
    
    expect(el.value).toStrictEqual(file)
    
    // destroy(form) // teardown
  })
  
  it('should validate when `handleChange` is triggered and `validateOn` contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'filaname')
    
    expect(el.validated).toBe(false)
    
    await el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })
    
    await flushPromises()
    
    expect(el.validated).toBe(true)
    
    // destroy(form) // teardown
  })
  
  it('should not validate when `handleChange` is triggered and `validateOn` does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required'
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let file = new File([''], 'filaname')
    
    expect(el.validated).toBe(false)
    
    await el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })
    
    await flushPromises()
    
    expect(el.validated).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should trigger `handleChange` when file input changes', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    el.value = 'value'
    
    elWrapper.find('input').trigger('change')
    
    expect(el.value).toBe(null)
    
    // destroy(form) // teardown
  })
  
  it('should call "updated" when `handleChange` updates value', async () => {
    let onChangeMock = jest.fn()
    
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          onChange: onChangeMock,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let file = new File([''], 'filename.jpg')
    
    await el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })
    
    await nextTick()
    
    expect(onChangeMock).toHaveBeenCalledWith(file, null, el)
    
    // destroy() // teardown
  })
}

export const handleClick = function (elementType, elementName, options) {
  it('should click input element when upload button is clicked in `handleClick`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    let clickMock = jest.fn()
    
    el.input = {
      click: clickMock
    }
    
    expect(clickMock).not.toHaveBeenCalled()
    
    elWrapper.find(`[class="${el.template.data().defaultClasses.button}"]`).trigger('click')
    
    await nextTick()
    
    expect(clickMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
  
  it('should not click input element when upload button is clicked & disabled in `handleClick`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          disabled: true
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let clickMock = jest.fn()
    
    el.input = {
      click: clickMock
    }
    
    expect(clickMock).not.toHaveBeenCalled()
    
    el.handleClick()
    
    await nextTick()
    
    expect(clickMock).not.toHaveBeenCalled()
    
    // destroy() // teardown
  })
}

export const handleUploadTemp = function (elementType, elementName, options) {
  
  it('should trigger `handleUploadTemp` when upload temp button is clicked', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let FilePreview = findAllComponents(form, { name: 'FilePreview' }).at(0)
    
    el.$vueform.services.axios.request = jest.fn(() => ({data:{}}))
    
    el.load(new File([], 'filename.jpg'))
    
    await nextTick()
    
    let uploadTempButton = findAll(FilePreview, `[class="${FilePreview.vm.classes.upload}"]`).at(0)
    
    uploadTempButton.trigger('click')
    
    await flushPromises()
    
    expect(el.validated).toBe(true)
    
    // destroy() // teardown
  })
  
  it('should trigger uploadTemp on `handleUploadTemp` when upload temp button is clicked', async () => {
    
    const requestMock = jest.fn(() => ({data:{}}))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = requestMock
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.load(new File([''], 'filename.jpg'))
    
    await nextTick()
    
    el.handleUploadTemp()
    
    await nextTick()
    
    expect(requestMock).toHaveBeenCalled()
  })
}

export const handleRemove = function (elementType, elementName, options) {
  it('should trigger `handleRemove` when remove button is clicked', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
          rules: 'required',
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let FilePreview = findAllComponents(form, { name: 'FilePreview' }).at(0)
    
    el.load(new File([], 'filename.jpg'))
    
    await nextTick()
    
    let removeButton = findAll(elWrapper, `[class="${FilePreview.vm.classes.remove}"]`).at(0)
    
    removeButton.trigger('click')
    
    expect(el.value).toBe(el.nullValue)
    
    // destroy() // teardown
  })
}

export const handleAbort = function (elementType, elementName, options) {
  it('should trigger `handleAbort` when `Abort` is clicked', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let FilePreview = findAllComponents(form, { name: 'FilePreview' }).at(0)
    
    let cancelMock = jest.fn()
    
    el.request = {
      cancel: cancelMock
    }
    
    await nextTick()
    
    expect(cancelMock).not.toHaveBeenCalled()
    
    elWrapper.find(`[class="${FilePreview.vm.template.data().defaultClasses.remove}"]`).trigger('click')
    
    await nextTick()
    
    expect(cancelMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })
  
  it('should submit form if `Abort` is not clicked', async () => {
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let axiosPostMock = jest.fn(() => {
      return {
        tmp: 'tmp123',
        originalName: 'filename.jpg'
      }
    })
    
    form.vm.$vueform.services.axios.request = axiosPostMock
    
    let file = new File([''], 'filename')
    
    el.load(file)
    
    expect(axiosPostMock).not.toHaveBeenCalled()
    
    form.vm.submit()
    
    await flushPromises()
    
    expect(axiosPostMock).toHaveBeenCalledTimes(2)
    
    // destroy(form) // teardown
  })
  
  it('should throw an error when `Abort` is clicked', async () => {
    let form = createForm({
      method: 'submit',
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    try {
      let axiosPostMock = jest.fn(() => {
        return {
          data: {
            tmp: 'tmp123',
            originalName: 'filename.jpg'
          }
        }
      })
      
      el.axios.request = axiosPostMock
      el.axios.isCancel = () => true
      el.axios.CancelToken = {
        source: () => {
          return {
            token: 'asdf',
            cancel: () => {
              throw new Error('Cancelled')
            }
          }
        }
      }
      
      let file = new File([''], 'filename')
      
      el.load(file)
      
      el.uploadTemp()
      
      await nextTick()
      
      expect(el.request).not.toBe(null)
      
      el.handleAbort()
      
      await nextTick()
    } catch (e) {
      expect(e).toStrictEqual(new Error('Cancelled'))
    }
    
    // destroy(form) // teardown
  })
  
  it('should not cancel request when `Abort` is clicked and request does not exist', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    let cancelMock = jest.fn()
    
    el.request = null
    
    expect(cancelMock).not.toHaveBeenCalled()
    
    el.handleAbort()
    
    await nextTick()
    
    expect(cancelMock).not.toHaveBeenCalled()
    
    // destroy() // teardown
  })
}


export const rendering = function (elementType, elementName, options) {
  it('should hide file input', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.find('input[type="file"]').exists()).toBe(true)
    expect(elWrapper.get('input').element).not.toBeVisible()
    
    // destroy(form) // teardown
  })
  
  it('should render upload button', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.html()).toContain(el.template.data().defaultClasses.button)
    
    // destroy(form) // teardown
  })
  
  it('should render upload button if `embed` is false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          embed: false,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.$el.querySelectorAll(`.${el.template.data().defaultClasses.button.replace(' ', '.')}`).length).toBe(1)
    
    // destroy(form) // teardown
  })
  
  it('should not render upload button & input not exist if `embed` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          embed: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.$el.querySelectorAll(`.${el.template.data().defaultClasses.button.replace(' ', '.')}`).length).toBe(0)
    
    // destroy(form) // teardown
  })
  
  it('should not render select button if `disabled`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    await nextTick()
    
    expect(elWrapper.find(`[class="${el.template.data().defaultClasses.selectButton}"]`).exists()).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should not render select button if `preparing`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    el.preparing = true
    
    await nextTick()
    
    expect(elWrapper.find(`[class="${el.template.data().defaultClasses.selectButton}"]`).exists()).toBe(false)
    
    // destroy(form) // teardown
  })
  
  it('should not render input if `disabled`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    await nextTick()
    
    expect(el.input).toBeFalsy()
    
    // destroy(form) // teardown
  })
  
  it('should not render input if `preparing`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    el.preparing = true
    
    await nextTick()
    
    expect(elWrapper.find('input[type="file"]').exists()).toBe(false)
    
    // destroy(form) // teardown
  })
}