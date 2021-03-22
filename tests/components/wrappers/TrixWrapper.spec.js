import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, findAllComponents, installLaraform, createElement } from 'test-helpers'
import { markRaw, nextTick } from 'composition-api'
import TrixEditor from './../../mocks/TrixEditor'
import flushPromises from 'flush-promises'
import defaultTheme from './../../../src/themes/default'

const createTrix = (details) => {
  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  defaultTheme.components.TrixWrapper.components = {
    TrixEditor: markRaw(TrixEditor)
  }

  let form = createForm(details, {
    config: {
      themes: {
        default: defaultTheme,
      }
    }
  })
  
  console.error = originalConsoleError

  return form
}

describe('Trix Element Rendering', () => {
  it('should set `contentEditable` false when `disabled`', async () => {
    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          disabled: true
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(trixEditor$.contentEditable).toBe(false)
  })

  it('should update `contentEditable` when `disabled` changes', async () => {
    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(trixEditor$.contentEditable).toBe(true)

    a.vm.disable()

    await nextTick()

    expect(trixEditor$.contentEditable).toBe(false)
  })

  it('should `update` trix value', async () => {
    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(trixEditor$.value).toBe(null)

    a.vm.update('<div>aaa</div>')
    await nextTick()
    expect(trixEditor$.value).toBe('<div>aaa</div>')
  })

  it('should set trix options with `setOption`', async () => {
    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    trix$.setOption('option', 'value')
    expect(trixEditor$.option).toBe('value')
  })

  it('should update element value with `handleChange`', async () => {
    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(a.vm.value).toBe(null)
    expect(trixEditor$.value).toBe(null)

    trixEditor$.value = '<div>aaa</div>'
    trix$.handleChange()

    expect(a.vm.value).toBe('<div>aaa</div>')
  })

  it('should trigger element\'s `change` event on `handleChange`', async () => {
    let onChangeMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onChange: onChangeMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onChangeMock.mock.calls.length).toBe(0)

    trixEditor$.value = '<div>aaa</div>'
    trix$.handleChange()

    await nextTick()

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe('<div>aaa</div>')
    expect(onChangeMock.mock.calls[0][1]).toBe(null)
  })

  it('should not trigger `error` event when mime type is allowed', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onError: onErrorMock,
          acceptMimes: ['image/jpeg', 'image/png']
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let fileMock = {
      type: 'image/jpeg',
      name: 'image.jpg',
    }

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      file: fileMock,
      preventDefault: preventMock
    })
    
    await nextTick()

    expect(onErrorMock.mock.calls.length).toBe(0)
    expect(preventMock.mock.calls.length).toBe(0)
  })

  it('should trigger `error` event when mime type is not allowed', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onError: onErrorMock,
          acceptMimes: ['image/jpeg', 'image/png']
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()

    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let fileMock = {
      type: 'image/gif',
      name: 'image.gif',
    }

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      file: fileMock,
      preventDefault: preventMock
    })

    await nextTick()

    expect(onErrorMock.mock.calls.length).toBe(1)
    expect(onErrorMock.mock.calls[0][0]).toContain('image/jpeg')
    expect(onErrorMock.mock.calls[0][0]).toContain('image/png')
    expect(preventMock.mock.calls.length).toBe(1)
  })

  it('should not trigger `error` event when extension is allowed', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onError: onErrorMock,
          accept: ['jpg', 'png']
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let fileMock = {
      type: 'image/jpeg',
      name: 'image.jpg',
    }

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      file: fileMock,
      preventDefault: preventMock
    })
    await nextTick()

    expect(onErrorMock.mock.calls.length).toBe(0)
    expect(preventMock.mock.calls.length).toBe(0)
  })

  it('should trigger `error` event when mime type is not allowed', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onError: onErrorMock,
          accept: ['jpg', 'png']
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let fileMock = {
      type: 'image/gif',
      name: 'image.gif',
    }

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      file: fileMock,
      preventDefault: preventMock
    })
    await nextTick()

    expect(onErrorMock.mock.calls.length).toBe(1)
    expect(onErrorMock.mock.calls[0][0]).toContain('jpg')
    expect(onErrorMock.mock.calls[0][0]).toContain('png')
    expect(preventMock.mock.calls.length).toBe(1)
  })

  it('should prevent file accept if disabled', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          disabled: true
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      preventDefault: preventMock
    })
    await nextTick()

    expect(preventMock.mock.calls.length).toBe(1)
  })

  it('should prevent file accept if file does not exist', async () => {
    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(onErrorMock.mock.calls.length).toBe(0)

    let preventMock = jest.fn()

    trix$.handleFileAccept({
      preventDefault: preventMock
    })
    await nextTick()

    expect(preventMock.mock.calls.length).toBe(1)
  })

  it('should return in `handleAttachmentAdd` if file does not exist', async () => {
    let axiosPostMock = jest.fn()

    let axiosMock = {
      post: axiosPostMock,
    }

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    form.vm.$laraform.services.axios = axiosMock

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$


    trix$.handleAttachmentAdd({
      attachment: {}
    })
    await nextTick()

    expect(axiosPostMock.mock.calls.length).toBe(0)
  })

  it('should throw error in `handleAttachmentAdd` if endpoint does not exist', async () => {
    let axiosPostMock = jest.fn()

    let axiosMock = {
      post: axiosPostMock,
    }

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    form.vm.$laraform.services.axios = axiosMock

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    form.vm.$set(form.vm.laraform.schema.a, 'endpoint', null)

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    expect(() => {
      const originalConsoleError = console.error

      console.error = (e) => {  }

      trix$.handleAttachmentAdd({
        attachment: {
          file: {}
        }
      })

      console.error = originalConsoleError
    }).toThrowError()
  })

  it('should call axios.post on `handleAttachmentAdd`', async () => {
    let axiosPostMock = jest.fn(() => {
      return new Promise((resolve, reject) => {
        setTimeout(function(){
          resolve({
            data: {
              url: 'url',
              href: 'href',
            }
          })
        }, 1)
      })
    })

    let axiosMock = {
      post: axiosPostMock,
    }

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TrixElement' }).at(0)

    a.vm.$laraform.services.axios = axiosMock

    await nextTick()
    let trix$ = a.vm.input
    let trixEditor$ = a.vm.input.$refs.trix$

    trix$.handleAttachmentAdd({
      attachment: {
        file: {},
        setUploadProgress: jest.fn()
      }
    })

    await nextTick()

    expect(axiosPostMock.mock.calls.length).toBe(1)
  })
})