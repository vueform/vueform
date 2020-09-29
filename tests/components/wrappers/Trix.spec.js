import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../../../src/utils/testHelpers'
import defaultTheme from './../../../src/themes/default'

const createTrix = (details) => {
  const LocalVue = createLocalVue()

  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  defaultTheme.components.Trix.components = {
    TrixEditor: LocalVue.extend({
      data() {
        return {
          contentEditable: true,
          value: null,
        }
      },
      render(h) {
        return h('div', 'asdf')
      }
    })
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
  it('should set `contentEditable` false when `disabled`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(trixEditor$.contentEditable).toBe(false)

      done()
    })
  })

  it('should update `contentEditable` when `disabled` changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(trixEditor$.contentEditable).toBe(true)

      a.vm.disabled = true

      LocalVue.nextTick(() => {
        expect(trixEditor$.contentEditable).toBe(false)

        done()
      })
    })
  })

  it('should `update` trix value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(trixEditor$.value).toBe(null)

      a.vm.update('aaa')
      expect(trixEditor$.value).toBe('aaa')

      a.vm.update(123)
      expect(trixEditor$.value).toBe('123')

      done()
    })
  })

  it('should set trix options with `setOption`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      trix$.setOption('option', 'value')
      expect(trixEditor$.option).toBe('value')

      done()
    })
  })

  it('should update element value with `handleChange`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(a.vm.value).toBe(null)
      expect(trixEditor$.value).toBe(null)

      trixEditor$.value = 'aaa'
      trix$.handleChange()

      expect(a.vm.value).toBe('aaa')

      done()
    })
  })

  it('should trigger element\'s `change` event on `handleChange`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          onChange: onChangeMock
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(onChangeMock.mock.calls.length).toBe(0)

      trixEditor$.value = 'aaa'
      trix$.handleChange()

      expect(onChangeMock.mock.calls.length).toBe(1)
      expect(onChangeMock.mock.calls[0][0]).toBe('aaa')
      expect(onChangeMock.mock.calls[0][1]).toBe(null)

      done()
    })
  })

  it('should not trigger `error` event when mime type is allowed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

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

      expect(onErrorMock.mock.calls.length).toBe(0)
      expect(preventMock.mock.calls.length).toBe(0)

      done()
    })
  })

  it('should trigger `error` event when mime type is not allowed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

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

      expect(onErrorMock.mock.calls.length).toBe(1)
      expect(onErrorMock.mock.calls[0][0]).toContain('image/jpeg')
      expect(onErrorMock.mock.calls[0][0]).toContain('image/png')
      expect(preventMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should not trigger `error` event when extension is allowed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

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

      expect(onErrorMock.mock.calls.length).toBe(0)
      expect(preventMock.mock.calls.length).toBe(0)

      done()
    })
  })

  it('should trigger `error` event when mime type is not allowed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

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

      expect(onErrorMock.mock.calls.length).toBe(1)
      expect(onErrorMock.mock.calls[0][0]).toContain('jpg')
      expect(onErrorMock.mock.calls[0][0]).toContain('png')
      expect(preventMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should prevent file accept if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(onErrorMock.mock.calls.length).toBe(0)

      let preventMock = jest.fn()

      trix$.handleFileAccept({
        preventDefault: preventMock
      })

      expect(preventMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should prevent file accept if file does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onErrorMock = jest.fn()

    let form = createTrix({
      schema: {
        a: {
          type: 'trix',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      expect(onErrorMock.mock.calls.length).toBe(0)

      let preventMock = jest.fn()

      trix$.handleFileAccept({
        preventDefault: preventMock
      })

      expect(preventMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should return in `handleAttachmentAdd` if file does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$


      trix$.handleAttachmentAdd({
        attachment: {}
      })

      expect(axiosPostMock.mock.calls.length).toBe(0)

      done()
    })
  })

  it('should throw error in `handleAttachmentAdd` if endpoint does not exist', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    a.vm.endpoint = null

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

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
      
      done()
    })
  })

  it('should call axios.post on `handleAttachmentAdd`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    let a = form.findAllComponents({ name: 'TrixElement' }).at(0)

    a.vm.$laraform.services.axios = axiosMock

    LocalVue.nextTick(() => {
      let trix$ = a.vm.$refs.trix$
      let trixEditor$ = a.vm.$refs.trix$.$refs.trix$

      trix$.handleAttachmentAdd({
        attachment: {
          file: {},
          setUploadProgress: jest.fn()
        }
      })

      expect(axiosPostMock.mock.calls.length).toBe(1)
      
      done()
    })
  })
})