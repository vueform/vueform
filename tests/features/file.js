import { createForm, testComputedOption, findAllComponents, findAll } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

expect.extend({toBeVisible})

export const file = function (elementType, elementName, options) {
  it('should `file` be null by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.file).toBe(null)
  })

  it('should set `file` when `value` changes to a File object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.file).toBe(null)

    el.load(new File([''], 'a'))

    await nextTick()

    expect(el.file).not.toBe(null)
  })

  it('should set `file` to null when value changes to something else than a File object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.file).toBe(null)

    el.load('a.jpg')

    await nextTick()

    expect(el.file).toBe(null)
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

export const accept = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'accept', null, ['.jpg', '.png'])
}

export const clickable = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'clickable', true, false)
}

export const auto = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'auto', true, false)
}

export const methods = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  testComputedOption(it, elementType, 'methods', form.vm.$laraform.methods.file, {
    uploadTemp: 'put',
    removeTemp: 'delete',
    remove: 'patch',
  })

  it('should merge `methods` with config methods', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          methods: {
            uploadTemp: 'put'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.methods).toStrictEqual(Object.assign({}, el.$laraform.methods.file, {
      uploadTemp: 'put'
    }))
  })
}

export const endpoints = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  testComputedOption(it, elementType, 'endpoints', form.vm.$laraform.endpoints.file, {
    uploadTemp: 'upload-temp',
    removeTemp: 'remove-temp',
    remove: 'remove',
  })

  it('should merge `endpoints` with config methods', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          endpoints: {
            uploadTemp: 'upload-temp',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.endpoints).toStrictEqual(Object.assign({}, el.$laraform.endpoints.file, {
      uploadTemp: 'upload-temp',
    }))
  })
}

export const url = function (elementType, elementName, options) {
  it('should have "/" as default `url`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.url).toStrictEqual('/')
  })

  it('should set `url` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: '/uploads/',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.url).toStrictEqual('/uploads/')
  })

  it('should prefix `url` without starting /', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: 'uploads/',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.url).toStrictEqual('/uploads/')
  })

  it('should not prefix `url` if starts with http', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: 'https://domain.com',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.url).toStrictEqual('https://domain.com/')
  })

  it('should suffix `url` without ending /', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          url: '/uploads',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.url).toStrictEqual('/uploads/')
  })

  it('should set `url` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.url = '/uploads/'

    expect(el.url).toStrictEqual('/uploads/')
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
  })

  it('should undefined for `link` if `clickable` is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load('a.jpg')

    expect(el.link).toStrictEqual('/a.jpg')

    el.clickable = false

    expect(el.link).toStrictEqual(undefined)
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

    expect(el.canUploadTemp).toStrictEqual(true)

    el.request = {}

    expect(el.canUploadTemp).toStrictEqual(false)

    el.request = null

    expect(el.canUploadTemp).toStrictEqual(true)

    el.auto = true
    
    expect(el.canUploadTemp).toStrictEqual(false)

    el.auto = false

    expect(el.canUploadTemp).toStrictEqual(true)

    el.load('filename')

    expect(el.canUploadTemp).toStrictEqual(false)
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
      clickable: el.clickable,
      filename: el.filename,
    })
  })
}

export const uploadTemp = function (elementType, elementName, options) {
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

    el.axios.post = axiosMock

    el.load(new File([''], 'filename'))

    expect(el.stage).toBe(1)

    expect(axiosMock).not.toHaveBeenCalled()

    el.uploadTemp()

    await flushPromises()

    expect(axiosMock).not.toHaveBeenCalled()
  })

  it('should send file to upload endpoint & update with return value in `uploadTemp`', async () => {
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

    let axiosMock = jest.fn(() => {
      return {
        data: tmp
      }
    })

    el.axios.post = axiosMock

    let file = new File([''], 'filename')

    el.load(file)

    expect(el.stage).toBe(1)

    expect(axiosMock).not.toHaveBeenCalled()

    expect(el.value).toStrictEqual(file)

    el.uploadTemp()

    await flushPromises()

    expect(axiosMock).toHaveBeenCalled()

    expect(axiosMock.mock.calls[0][1] instanceof FormData).toBe(true)
    expect(axiosMock.mock.calls[0][1].get('file')).toStrictEqual(file)
    expect(axiosMock.mock.calls[0][1].get('key')).toStrictEqual('key')
    expect(axiosMock.mock.calls[0][1].get('path')).toStrictEqual('el')

    expect(el.value).toStrictEqual(tmp)
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

    let axiosMock = jest.fn((url,data,options) => {
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

    el.axios.post = axiosMock

    let file = new File([''], 'filename')

    el.load(file)
    
    el.uploadTemp()

    await flushPromises()

    expect(el.progress).toBe(80)
    axiosMock.mockRestore()
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

    el.axios.post = axiosMock

    let file = new File([''], 'filename')

    el.load(file)

    let catchMock = jest.fn()
    
    el.uploadTemp().catch((e) => { catchMock() })

    await flushPromises()

    expect(catchMock).toHaveBeenCalled()
  })

  it('should upload temp when `value` changes to a File object & auto is true', async () => {
    let postMock = jest.fn(() => { return { data: 'filename' } })

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
        }
      }
    })

    let el = form.vm.el$('el')

    el.axios.post = postMock

    expect(postMock).not.toHaveBeenCalled()

    el.load(new File([''], 'a'))

    await nextTick()
    await flushPromises() // because of async validate

    expect(postMock).toHaveBeenCalled()
  })

  it('should not upload temp when `value` changes to a File object & auto is true', async () => {
    let postMock = jest.fn(() => { return { data: 'filename' } })

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    el.axios.post = postMock

    expect(postMock).not.toHaveBeenCalled()

    el.load(new File([''], 'a'))

    await nextTick()

    expect(postMock).not.toHaveBeenCalled()
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

    el.axios.post = jest.fn(() => {
      return {
        data: tmp
      }
    })

    let file = new File([''], 'filename')

    el.value = file

    el.uploadTemp()

    await flushPromises()

    expect(el.dirty).toStrictEqual(true)
    expect(onChangeMock).toHaveBeenCalledWith(tmp, file)
  })
}

export const remove = function (elementType, elementName, options) {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
    jest.spyOn(window, 'confirm').mockImplementation(() => true)
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
  })

  it('should validate file when `remove` if `validateOn` contains "change"', async () => {
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

    expect(el.validated).toBe(false)

    el.remove()

    await flushPromises()

    expect(el.validated).toBe(true)
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
  })

  it('should call remove temp endpoint when removed in stage 2', () => {
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

    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }

    el.axios.post = axiosMock

    el.load(tmp)

    expect(el.stage).toBe(2)

    el.remove()

    expect(axiosMock).toHaveBeenCalled()
    expect(axiosMock.mock.calls[0][1]).toStrictEqual({
      file: tmp.tmp
    })
  })

  it('should restore file & progress when removed in stage 2 with error', async () => {
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

    el.axios.post = axiosMock

    el.progress = 100
    el.load(tmp)

    expect(el.stage).toBe(2)

    el.remove()

    await flushPromises()

    expect(errorMock).toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(tmp)
    expect(el.progress).toBe(100)
  })

  it('should call remove file endpoint when removed in stage 3', () => {
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

    el.axios.post = axiosMock

    el.load(file)

    expect(el.stage).toBe(3)

    el.remove()

    expect(axiosMock).toHaveBeenCalled()
    expect(axiosMock.mock.calls[0][1]).toStrictEqual({
      file: file
    })
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

    el.axios.post = axiosMock

    el.load(file)

    expect(el.stage).toBe(3)

    el.remove()

    expect(axiosMock).not.toHaveBeenCalled()
  })

  it('should restore file & progress when removed in stage 3 with error', async () => {
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

    let file = 'filename.jpg'

    el.axios.post = axiosMock

    el.progress = 100
    el.load(file)

    expect(el.stage).toBe(3)

    el.remove()

    await flushPromises()

    expect(errorMock).toHaveBeenCalled()
    
    expect(el.value).toStrictEqual(file)
    expect(el.progress).toBe(100)
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

    el.remove()

    expect(el.dirty).toBe(true)
    expect(onChangeMock).toHaveBeenCalledWith(null, file)
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
    
    expect(onRemoveMock).toHaveBeenCalledWith(file)
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

    el.load(tmp)

    expect(el.validated).toBe(false)

    expect(el.stage).toBe(2)

    el.prepare()

    await flushPromises()

    expect(el.validated).toBe(false)
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

    el.axios.post = jest.fn(() => {
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

    el.axios.post = axiosPostMock

    let file = new File([''], 'filename')

    el.load(file)

    el.prepare()

    expect(el.preparing).toBe(true)

    await flushPromises()

    expect(el.preparing).toBe(false)
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

      el.axios = {
        post: axiosPostMock,
        isCancel: () => true,
        CancelToken: {
          source: () => {
            return {
              token: 'asdf',
              cancel: () => {
                throw new Error('Cancelled')
              }
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
  })
}

export const handleChange = function (elementType, elementName, options) {
  it('should update file when `handleChange` is triggered', () => {
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

    el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })

    expect(el.value).toStrictEqual(file)
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

    el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })

    await flushPromises()

    expect(el.validated).toBe(true)
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

    el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })

    await flushPromises()

    expect(el.validated).toBe(false)
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
    
    expect(el.dirty).toBe(false)

    el.handleChange({
      target: {
        files: [
          file
        ]
      }
    })

    expect(el.dirty).toBe(true)

    expect(onChangeMock).toHaveBeenCalledWith(file, null)
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

    elWrapper.find(`[class="${el.classes.selectButton}"]`).trigger('click')

    await nextTick()

    expect(clickMock).toHaveBeenCalled()
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

    el.load(new File([], 'filename.jpg'))

    await nextTick()

    let uploadTempButton = findAll(elWrapper, `[class="${el.classes.uploadButton}"]`).at(0)

    uploadTempButton.trigger('click')

    await flushPromises()

    expect(el.validated).toBe(true)
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

    el.load(new File([], 'filename.jpg'))

    await nextTick()

    let removeButton = findAll(elWrapper, `[class="${el.classes.removeButton}"]`).at(0)

    removeButton.trigger('click')
    
    expect(el.value).toBe(el.nullValue)
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

    let cancelMock = jest.fn()

    el.request = {
      cancel: cancelMock
    }

    await nextTick()

    expect(cancelMock).not.toHaveBeenCalled()

    elWrapper.find(`[class="${el.classes.abortButton}"]`).trigger('click')

    await nextTick()

    expect(cancelMock).toHaveBeenCalled()
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

    let axiosSubmitMock = jest.fn(() => { return { data: {} } })

    el.axios.post = axiosPostMock

    form.vm.$laraform.services.axios.submit = axiosSubmitMock

    let file = new File([''], 'filename')

    el.load(file)

    expect(axiosPostMock).not.toHaveBeenCalled()
    expect(axiosSubmitMock).not.toHaveBeenCalled()

    form.vm.submit()

    await flushPromises()

    expect(axiosPostMock).toHaveBeenCalled()
    expect(axiosSubmitMock).toHaveBeenCalled()
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

      el.axios = {
        post: axiosPostMock,
        isCancel: () => true,
        CancelToken: {
          source: () => {
            return {
              token: 'asdf',
              cancel: () => {
                throw new Error('Cancelled')
              }
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
  })
}

export const handleError = function (elementType, elementName, options) {
  it('should trigger `error` event on error', async () => {
    let onErrorMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onError: onErrorMock,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onErrorMock).not.toHaveBeenCalled()

    el.handleError('error', 'e')

    expect(onErrorMock).toHaveBeenCalledWith('error', 'e')
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

    expect(elWrapper.html()).toContain(el.classes.selectButton)
  })

  it('should not render upload button & input not exist if `embed` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    const originalConsoleError = console.error
    const originalConsoleWarn = console.warn
    console.error = () => {}
    console.warn = () => {}

    el.$props.embed = true

    console.error = originalConsoleError
    console.warn = originalConsoleWarn

    await nextTick()

    expect(el.input).not.toBeVisible()
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

    expect(elWrapper.find(`[class="${el.classes.selectButton}"]`).exists()).toBe(false)
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

    expect(elWrapper.find(`[class="${el.classes.selectButton}"]`).exists()).toBe(false)
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
  })

  it('should render preview with filename if it has no link', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    el.load({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    await nextTick()
    
    expect(elWrapper.find('.preview').html()).not.toContain('href')
    expect(elWrapper.find('.preview').html()).toContain('filename')
  })

  it('should render preview with anchor if it has link', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    el.load('filename')

    await nextTick()
    
    expect(elWrapper.find('.preview').html()).toContain('href')
    expect(elWrapper.find('.preview').html()).toContain('filename')
  })

  it('should only show progress if `progress` is larger than 0', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let fsp$ = findAllComponents(elWrapper, { name: 'FileSlotProgress' }).at(0)

    expect(fsp$.html()).toBeFalsy()

    el.progress = 60

    await nextTick()

    expect(fsp$.html()).toBeTruthy()
  })

  it('should only show temp upload button if `canUploadTemp` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.find(`a[class="${el.classes.uploadButton}"]`).exists()).toBe(false)

    el.load(new File([''], 'filename'))

    await nextTick()

    expect(elWrapper.find(`a[class="${el.classes.uploadButton}"]`).exists()).toBe(true)
  })

  it('should only show remove button if `canRemove` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.find(`a[class="${el.classes.removeButton}"]`).exists()).toBe(false)

    el.load(new File([''], 'filename'))

    await nextTick()

    expect(elWrapper.find(`a[class="${el.classes.removeButton}"]`).exists()).toBe(true)
  })

  it('should only show abort button if `uploading` is true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.find(`a[class="${el.classes.abortButton}"]`).exists()).toBe(false)

    el.request = {}

    await nextTick()

    expect(elWrapper.find(`a[class="${el.classes.abortButton}"]`).exists()).toBe(true)
  })
}