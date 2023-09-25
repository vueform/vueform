import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, findAllComponents, installVueform, createElement } from 'test-helpers'
import { markRaw, nextTick } from 'vue'
import TrixEditor from './../../mocks/TrixEditor'
import flushPromises from 'flush-promises'
import defaultTheme from './../../../themes/vueform'

const createEditor = (details, options = {}) => {
  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  defaultTheme.templates.EditorWrapper.components = {
    TrixEditor: markRaw(TrixEditor)
  }

  let form = createForm(details, {
    config: {
      themes: {
        default: defaultTheme,
      },
      ...(options.config || {})
    }
  })
  
  console.error = originalConsoleError

  return form
}

describe('Editor Element Rendering', () => {
  // todo: removed because trix-editor is now not a mock, as it is used with v-pre from 1.4.0
  it('should', () => {
    expect(true).toBe(true)
  })
  // it('should set `contentEditable` false when `disabled`', async () => {
  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         disabled: true
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(editorInstnace$.contentEditable).toBe(false)
  // })

  // it('should update `contentEditable` when `disabled` changes', async () => {
  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(editorInstnace$.contentEditable).toBe(true)

  //   a.vm.disable()

  //   await nextTick()

  //   expect(editorInstnace$.contentEditable).toBe(false)
  // })

  // it('should `update` editor value', async () => {
  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(editorInstnace$.value).toBe(null)

  //   a.vm.update('<div>aaa</div>')
  //   await nextTick()
  //   expect(editorInstnace$.value).toBe('<div>aaa</div>')
  // })

  // it('should set editor options with `setOption`', async () => {
  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   editor$.setOption('option', 'value')
  //   expect(editorInstnace$.option).toBe('value')
  // })

  // it('should update element value with `handleChange`', async () => {
  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(a.vm.value).toBe(null)
  //   expect(editorInstnace$.value).toBe(null)

  //   editorInstnace$.value = '<div>aaa</div>'
  //   editor$.handleChange()

  //   expect(a.vm.value).toBe('<div>aaa</div>')
  // })

  // it('should trigger element\'s `change` event on `handleChange`', async () => {
  //   let onChangeMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         onChange: onChangeMock
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onChangeMock.mock.calls.length).toBe(0)

  //   editorInstnace$.value = '<div>aaa</div>'
  //   editor$.handleChange()

  //   await nextTick()

  //   expect(onChangeMock.mock.calls.length).toBe(1)
  //   expect(onChangeMock.mock.calls[0][0]).toBe('<div>aaa</div>')
  //   expect(onChangeMock.mock.calls[0][1]).toBe(null)
  // })

  // it('should not trigger `error` event when mime type is allowed', async () => {
  //   let onErrorMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         onError: onErrorMock,
  //         acceptMimes: ['image/jpeg', 'image/png']
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onErrorMock.mock.calls.length).toBe(0)

  //   let fileMock = {
  //     type: 'image/jpeg',
  //     name: 'image.jpg',
  //   }

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     file: fileMock,
  //     preventDefault: preventMock
  //   })
    
  //   await nextTick()

  //   expect(onErrorMock.mock.calls.length).toBe(0)
  //   expect(preventMock.mock.calls.length).toBe(0)
  // })

  // it('should trigger `alert` event when mime type is not allowed', async () => {
  //   let onAlertMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         onAlert: onAlertMock,
  //         acceptMimes: ['image/jpeg', 'image/png']
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()

  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onAlertMock.mock.calls.length).toBe(0)

  //   let fileMock = {
  //     type: 'image/gif',
  //     name: 'image.gif',
  //   }

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     file: fileMock,
  //     preventDefault: preventMock
  //   })

  //   await nextTick()

  //   expect(onAlertMock.mock.calls.length).toBe(1)
  //   expect(onAlertMock.mock.calls[0][0]).toContain('image/jpeg')
  //   expect(onAlertMock.mock.calls[0][0]).toContain('image/png')
  //   expect(preventMock.mock.calls.length).toBe(1)
  // })

  // it('should not trigger `error` event when extension is allowed', async () => {
  //   let onErrorMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         onError: onErrorMock,
  //         accept: ['jpg', 'png']
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onErrorMock.mock.calls.length).toBe(0)

  //   let fileMock = {
  //     type: 'image/jpeg',
  //     name: 'image.jpg',
  //   }

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     file: fileMock,
  //     preventDefault: preventMock
  //   })
  //   await nextTick()

  //   expect(onErrorMock.mock.calls.length).toBe(0)
  //   expect(preventMock.mock.calls.length).toBe(0)
  // })

  // it('should trigger `alert` event when mime type is not allowed', async () => {
  //   let onAlertMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         onAlert: onAlertMock,
  //         accept: ['.jpg', '.png']
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onAlertMock.mock.calls.length).toBe(0)

  //   let fileMock = {
  //     type: 'image/gif',
  //     name: 'image.gif',
  //   }

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     file: fileMock,
  //     preventDefault: preventMock
  //   })
  //   await nextTick()

  //   expect(onAlertMock.mock.calls.length).toBe(1)
  //   expect(onAlertMock.mock.calls[0][0]).toContain('jpg')
  //   expect(onAlertMock.mock.calls[0][0]).toContain('png')
  //   expect(preventMock.mock.calls.length).toBe(1)
  // })

  // it('should prevent file accept if disabled', async () => {
  //   let onErrorMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         disabled: true
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onErrorMock.mock.calls.length).toBe(0)

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     preventDefault: preventMock
  //   })
  //   await nextTick()

  //   expect(preventMock.mock.calls.length).toBe(1)
  // })

  // it('should prevent file accept if file does not exist', async () => {
  //   let onErrorMock = jest.fn()

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$

  //   expect(onErrorMock.mock.calls.length).toBe(0)

  //   let preventMock = jest.fn()

  //   editor$.handleFileAccept({
  //     preventDefault: preventMock
  //   })
  //   await nextTick()

  //   expect(preventMock.mock.calls.length).toBe(1)
  // })

  // it('should return in `handleAttachmentAdd` if file does not exist', async () => {
  //   let axiosPostMock = jest.fn()

  //   let axiosMock = {
  //     request: axiosPostMock,
  //   }

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   form.vm.$vueform.services.axios = axiosMock

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()
  //   let editor$ = a.vm.input
  //   let editorInstnace$ = a.vm.input.$refs.editor$


  //   editor$.handleAttachmentAdd({
  //     attachment: {}
  //   })
  //   await nextTick()

  //   expect(axiosPostMock.mock.calls.length).toBe(0)
  // })

  // it('should call default endpoint on `handleAttachmentAdd`', async () => {
  //   let requestMock = jest.fn(() => ({ url: 'url', href: 'href' }))

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   a.vm.$vueform.services.axios.request = requestMock

  //   await nextTick()

  //   let editor$ = a.vm.input

  //   editor$.handleAttachmentAdd({
  //     attachment: {
  //       file: {},
  //       setUploadProgress: jest.fn()
  //     }
  //   })

  //   await flushPromises()

  //   expect(requestMock.mock.calls[0][0].url).toBe(form.vm.$vueform.config.endpoints.attachment.url)
  //   expect(requestMock.mock.calls[0][0].method).toBe(form.vm.$vueform.config.endpoints.attachment.method)
  // })

  // it('should call default function endpoint on `handleAttachmentAdd`', async () => {
  //   let requestMock = jest.fn(() => ({ url: 'url', href: 'href' }))

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //       }
  //     }
  //   }, {
  //     config: {
  //       endpoints: {
  //         attachment: requestMock,
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   a.vm.$vueform.services.axios.request = requestMock

  //   await nextTick()

  //   let editor$ = a.vm.input

  //   editor$.handleAttachmentAdd({
  //     attachment: {
  //       file: {},
  //       setUploadProgress: jest.fn()
  //     }
  //   })

  //   await flushPromises()

  //   expect(requestMock.mock.calls[0][1]).toEqual(form.vm.el$('a'))
  // })

  // it('should call custom endpoint & method on `handleAttachmentAdd`', async () => {
  //   let requestMock = jest.fn(() => ({ url: 'url', href: 'href' }))

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         endpoint: '/endpoint',
  //         method: 'method',
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   a.vm.$vueform.services.axios.request = requestMock

  //   await nextTick()

  //   let editor$ = a.vm.input

  //   editor$.handleAttachmentAdd({
  //     attachment: {
  //       file: {},
  //       setUploadProgress: jest.fn()
  //     }
  //   })

  //   await flushPromises()

  //   expect(requestMock.mock.calls[0][0].url).toBe('/endpoint')
  //   expect(requestMock.mock.calls[0][0].method).toBe('method')
  // })

  // it('should call custom function endpoint on `handleAttachmentAdd`', async () => {
  //   let requestMock = jest.fn(() => ({ url: 'url', href: 'href' }))

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         endpoint: requestMock,
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()

  //   let editor$ = a.vm.input

  //   editor$.handleAttachmentAdd({
  //     attachment: {
  //       file: {},
  //       setUploadProgress: jest.fn()
  //     }
  //   })

  //   await flushPromises()

  //   expect(requestMock.mock.calls[0][1]).toEqual(form.vm.el$('a'))
  // })

  // it('should call custom named endpoint on `handleAttachmentAdd`', async () => {
  //   let requestMock = jest.fn(() => ({ url: 'url', href: 'href' }))

  //   let form = createEditor({
  //     schema: {
  //       a: {
  //         type: 'editor',
  //         endpoint: 'endpoint',
  //       }
  //     }
  //   }, {
  //     config: {
  //       endpoints: {
  //         endpoint: requestMock
  //       }
  //     }
  //   })

  //   let a = findAllComponents(form, { name: 'EditorElement' }).at(0)

  //   await nextTick()

  //   let editor$ = a.vm.input

  //   editor$.handleAttachmentAdd({
  //     attachment: {
  //       file: {},
  //       setUploadProgress: jest.fn()
  //     }
  //   })

  //   await flushPromises()

  //   expect(requestMock.mock.calls[0][1]).toEqual(form.vm.el$('a'))
  // })
})