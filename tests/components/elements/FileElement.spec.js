import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'
import flushPromises from 'flush-promises'
import Validator from '../../../src/services/validation/validator'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

const Vue = createLocalVue()

let conosleErrorSpy

beforeEach(() => {
  // conosleErrorSpy = jest.spyOn(global.console, 'error')

  // conosleErrorSpy.mockImplementation(() => {
  //   error: () => {}
  // })

  jest.spyOn(window, 'alert').mockImplementation(() => {})
  jest.spyOn(window, 'confirm').mockImplementation(() => true)
})

afterEach(() => {
  // conosleErrorSpy.mockRestore()
})

describe('File Element Rendering', () => {
  it('should render file element', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.exists()).toBe(true)
  })

  it('should hide file input', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.find('input[type="file"]').exists()).toBe(true)
    expect(a.get('input').element).not.toBeVisible()
  })

  it('should render upload button', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.html()).toContain(a.vm.classes.selectButton)
  })

  it('should not render upload button & input not exist if `embed` is true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    a.vm.$props.embed = true

    console.error = originalConsoleError

    await Vue.nextTick()

    expect(a.find('input[type="file"]').exists()).toBe(false)
    expect(a.html()).not.toContain(a.vm.classes.selectButton)
  })

  it('should have disabled for input if `disabled`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          disabled: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    await Vue.nextTick()

    expect(_.keys(a.find('input[type="file"]').attributes())).toContain('disabled')
  })

  it('should render preview with filename if it has no link', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    await Vue.nextTick()
    
    expect(a.find('.preview').html()).not.toContain('href')
    expect(a.find('.preview').html()).toContain('filename')
  })

  it('should render preview with anchor if it has link', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('filename')

    await Vue.nextTick()
    
    expect(a.find('.preview').html()).toContain('href')
    expect(a.find('.preview').html()).toContain('filename')
  })

  it('should only show progress if `progress` is larger than 0', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)
    let fsp$ = a.findComponent({ name: 'FileSlotProgress' })

    expect(fsp$.html()).toBe('')

    a.vm.progress = 60

    await Vue.nextTick()

    expect(fsp$.html()).not.toBe('')
  })

  it('should only show temp upload button if `canUploadTemp` is true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.find(`a[class="${a.vm.classes.uploadButton}"]`).exists()).toBe(false)

    a.vm.update(new File([''], 'filename'))

    await Vue.nextTick()

    expect(a.find(`a[class="${a.vm.classes.uploadButton}"]`).exists()).toBe(true)
  })

  it('should only show remove button if `canRemove` is true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.find(`a[class="${a.vm.classes.removeButton}"]`).exists()).toBe(false)

    a.vm.update(new File([''], 'filename'))

    await Vue.nextTick()

    expect(a.find(`a[class="${a.vm.classes.removeButton}"]`).exists()).toBe(true)
  })

  it('should only show abort button if `uploading` is true', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.find(`a[class="${a.vm.classes.abortButton}"]`).exists()).toBe(false)

    a.vm.request = {}

    await Vue.nextTick()

    expect(a.find(`a[class="${a.vm.classes.abortButton}"]`).exists()).toBe(true)
  })
})

describe('File Element Options', () => {
  it('should have default `data` values', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.file).toStrictEqual(null)
    expect(a.vm.base64).toStrictEqual(null)
    expect(a.vm.progress).toStrictEqual(0)
    expect(a.vm.request).toStrictEqual(null)
    expect(a.vm.axios).not.toBe(null)
  })

  it('should have "/" as default `url`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.url).toStrictEqual('/')
  })

  it('should set `url` from schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          url: '/uploads/',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.url).toStrictEqual('/uploads/')
  })

  it('should prefix `url` without starting /', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          url: 'uploads/',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.url).toStrictEqual('/uploads/')
  })

  it('should not prefix `url` if starts with http', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          url: 'https://domain.com',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.url).toStrictEqual('https://domain.com/')
  })

  it('should suffix `url` without ending /', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          url: '/uploads',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.url).toStrictEqual('/uploads/')
  })

  it('should set `url` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.url = '/uploads/'

    expect(a.vm.url).toStrictEqual('/uploads/')
  })

  it('should have true as default `clickable`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.clickable).toStrictEqual(true)
  })

  it('should set `clickable` from schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          clickable: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.clickable).toStrictEqual(false)
  })

  it('should set `clickable` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.clickable = false

    expect(a.vm.clickable).toStrictEqual(false)
  })

  it('should have true as default `auto`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.auto).toStrictEqual(true)
  })

  it('should set `auto` from schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.auto).toStrictEqual(false)
  })

  it('should set `auto` to schema', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.auto = false

    expect(a.vm.auto).toStrictEqual(false)
  })
})

describe('File Element Computed', () => {
  it('should return 0 for `stage` if value is null', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.stage).toStrictEqual(0)
  })

  it('should return 1 for `stage` if file is instance of File', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.stage).toStrictEqual(1)
  })

  it('should return 2 for `stage` if value is a tmp object', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    })

    expect(a.vm.stage).toStrictEqual(2)
  })

  it('should return 3 for `stage` if value is a string', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('filename.jpg')

    expect(a.vm.stage).toStrictEqual(3)
  })

  it('should -1 for `stage` if value is an unknown format', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(['a'])

    expect(a.vm.stage).toBe(-1)
  })

  it('should return null as `filename` if in stage 0', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.filename).toStrictEqual(null)
  })

  it('should return `filename` in stage 1', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.stage).toStrictEqual(1)
    expect(a.vm.filename).toStrictEqual('filename')
  })

  it('should return `filename` in stage 2', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    expect(a.vm.stage).toStrictEqual(2)
    expect(a.vm.filename).toStrictEqual('filename')
  })

  it('should return `filename` in stage 3', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('filename')

    expect(a.vm.stage).toStrictEqual(3)
    expect(a.vm.filename).toStrictEqual('filename')
  })

  it('should undefined for `link` if not in uploaded stage', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.link).toStrictEqual(undefined)
  })

  it('should undefined for `link` if `clickable` is false', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('a.jpg')

    expect(a.vm.link).toStrictEqual('/a.jpg')

    a.vm.clickable = false

    expect(a.vm.link).toStrictEqual(undefined)
  })

  it('should have `uploading` true if request is not null', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.uploading).toStrictEqual(false)

    a.vm.request = {}

    expect(a.vm.uploading).toStrictEqual(true)
  })

  it('should have `uploaded` true if in stage 3', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.stage).not.toStrictEqual(3)
    expect(a.vm.uploaded).toStrictEqual(false)

    a.vm.update('filename')

    expect(a.vm.stage).toStrictEqual(3)
    expect(a.vm.uploaded).toStrictEqual(true)
  })

  it('should be `busy` if pending, debouncing or uploading', async (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: [class extends Validator {
            get isAsync() {
              return true
            }

            async check() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve()
                }, 1)
              })
            }
          }]
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.busy).toStrictEqual(false)

    a.vm.request = {}

    expect(a.vm.uploading).toStrictEqual(true)
    expect(a.vm.pending).toStrictEqual(false)
    expect(a.vm.debouncing).toStrictEqual(false)
    expect(a.vm.busy).toStrictEqual(true)

    a.vm.request = null

    expect(a.vm.uploading).toStrictEqual(false)
    expect(a.vm.busy).toStrictEqual(false)

    a.vm.validate()

    expect(a.vm.uploading).toStrictEqual(false)
    expect(a.vm.pending).toStrictEqual(true)
    expect(a.vm.debouncing).toStrictEqual(false)
    expect(a.vm.busy).toStrictEqual(true)
    
    setTimeout(() => {
      expect(a.vm.pending).toStrictEqual(false)
      expect(a.vm.busy).toStrictEqual(false)

      // debouncing should work also...

      done()
    }, 1)
  })

  it('should have `genericName` equal to filename if embedded & filename exists', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          label: 'File',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    a.vm.$props.embed = true
    
    console.error = originalConsoleError

    a.vm.update('filename')

    expect(a.vm.genericName).toStrictEqual('filename')
  })

  it('should have `genericName` equal to label if embedded & filename does not exist', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          label: 'File',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    a.vm.$props.embed = true
    
    console.error = originalConsoleError

    expect(a.vm.genericName).toStrictEqual('File')
  })

  it('should have `genericName` equal to name of the element if embedded & filename & label does not exist', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    a.vm.$props.embed = true
    
    console.error = originalConsoleError

    expect(a.vm.genericName).toStrictEqual('A')
  })

  it('should have `genericName` equal to default name fromn label if embedded & filename & label does not exist', async () => {
    let form = createForm({
      schema: {
        '0': {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    a.vm.$props.embed = true
    
    console.error = originalConsoleError

    expect(a.vm.genericName).toStrictEqual(a.vm.$laraform.locales[a.vm.locale].laraform.elements.file.defaultName)
  })

  it('should false for `canRemove` if stage is 0', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.canRemove).toStrictEqual(false)
  })

  it('should true for `canRemove` if stage is > 0 & not uploading', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.canRemove).toStrictEqual(true)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    expect(a.vm.canRemove).toStrictEqual(true)

    a.vm.update('filename')
    
    expect(a.vm.canRemove).toStrictEqual(true)
  })

  it('should false for `canRemove` if stage is > 0 & uploading', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.request = {}

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update('filename')
    
    expect(a.vm.canRemove).toStrictEqual(false)
  })

  it('should false for `canRemove` if stage is > 0 & disabled', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          disabled: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename'
    })

    expect(a.vm.canRemove).toStrictEqual(false)

    a.vm.update('filename')
    
    expect(a.vm.canRemove).toStrictEqual(false)
  })

  it('should have true for `canUploadTemp` if stage is 1, not uploading and not auto', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.canUploadTemp).toStrictEqual(false)

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.canUploadTemp).toStrictEqual(true)

    a.vm.request = {}

    expect(a.vm.canUploadTemp).toStrictEqual(false)

    a.vm.request = null

    expect(a.vm.canUploadTemp).toStrictEqual(true)

    a.vm.auto = true
    
    expect(a.vm.canUploadTemp).toStrictEqual(false)

    a.vm.auto = false

    expect(a.vm.canUploadTemp).toStrictEqual(true)

    a.vm.update('filename')

    expect(a.vm.canUploadTemp).toStrictEqual(false)
  })

  it('should return true for `isFileType`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.isFileType).toStrictEqual(true)
  })

  it('should return false for `isImage`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.isImage).toStrictEqual(false)
  })
})

describe('File Element Watchers', () => {
  it('should set `file` when `value` changes to a File object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.file).toBe(null)

    a.vm.update(new File([''], 'a'))

    await Vue.nextTick()

    expect(a.vm.file).not.toBe(null)
  })

  it('should upload temp when `value` changes to a File object & auto is true', async () => {
    let postMock = jest.fn(() => { return { data: 'filename' } })

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.axios.post = postMock

    expect(postMock.mock.calls.length).toBe(0)

    a.vm.update(new File([''], 'a'))

    await Vue.nextTick()

    expect(postMock.mock.calls.length).toBe(1)
  })

  it('should not upload temp when `value` changes to a File object & auto is true', async () => {
    let postMock = jest.fn(() => { return { data: 'filename' } })

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.axios.post = postMock

    expect(postMock.mock.calls.length).toBe(0)

    a.vm.update(new File([''], 'a'))

    await Vue.nextTick()

    expect(postMock.mock.calls.length).toBe(0)
  })

  it('should not set `base64` when file changes if isImage is false', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(new File([''], 'a'))

    expect(a.vm.base64).toBe(null)
  })

  it('should set `file` to null when value changes to something else than a File object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.file).toBe(null)

    a.vm.update('a.jpg')

    await Vue.nextTick()

    expect(a.vm.file).toBe(null)
  })
})

describe('File Element Methods', () => {
  it('should `validate`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.validate()

    await flushPromises()

    expect(a.vm.validated).toBe(true)
  })

  it('should not `validate` if form validation is turned off', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.form$.validation = false

    a.vm.validate()

    await flushPromises()

    expect(a.vm.validated).toBe(false)
  })

  it('should `validate` restricted rules if the value is a File object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required|min:30'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(new File([''], 'filename'))

    a.vm.validate()

    await flushPromises()

    expect(a.vm.errors.length).toBe(1)
  })

  it('should not `validate` restricted rules if the value is not a File object', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required|min:30'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('filename.jpg')

    a.vm.validate()

    await flushPromises()

    expect(a.vm.errors.length).toBe(0)
  })

  it('should set file null on `remove` in stage 1', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filename')

    a.vm.update(file)

    expect(a.vm.stage).toBe(1)
    expect(a.vm.value).toStrictEqual(file)

    a.vm.remove()

    expect(a.vm.value).toStrictEqual(null)
  })

  it('should validate file when `remove` if `validateOn` contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.validated).toBe(false)

    a.vm.remove()

    await flushPromises()

    expect(a.vm.validated).toBe(true)
  })

  it('should not validate file when `remove` if `validateOn` does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(a.vm.validated).toBe(false)

    a.vm.remove()

    await flushPromises()

    expect(a.vm.validated).toBe(false)
  })

  it('should set `progress` to 0 on `remove`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.progress = 60

    expect(a.vm.progress).toBe(60)

    a.vm.remove()

    expect(a.vm.progress).toBe(0)
  })

  it('should emit `remove` event on `remove`', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let removeMock = jest.fn()

    a.vm.$on('remove', removeMock)

    expect(removeMock.mock.calls.length).toBe(0)

    a.vm.remove()

    expect(removeMock.mock.calls.length).toBe(1)
  })

  it('should call remove temp endpoint when removed in stage 2', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let axiosMock = jest.fn()

    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }

    a.vm.axios.post = axiosMock

    a.vm.update(tmp)

    expect(a.vm.stage).toBe(2)

    a.vm.remove()

    expect(axiosMock.mock.calls.length).toBe(1)
    expect(axiosMock.mock.calls[0][1]).toStrictEqual({
      file: tmp.tmp
    })
  })

  it('should call remove file endpoint when removed in stage 3', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let axiosMock = jest.fn()

    let file = 'filename.jpg'

    a.vm.axios.post = axiosMock

    a.vm.update(file)

    expect(a.vm.stage).toBe(3)

    a.vm.remove()

    expect(axiosMock.mock.calls.length).toBe(1)
    expect(axiosMock.mock.calls[0][1]).toStrictEqual({
      file: file
    })
  })

  it('should not call remove file endpoint when removed and does not confirm in stage 3', () => {
    jest.spyOn(window, 'confirm').mockImplementation(() => false)

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let axiosMock = jest.fn()

    let file = 'filename.jpg'

    a.vm.axios.post = axiosMock

    a.vm.update(file)

    expect(a.vm.stage).toBe(3)

    a.vm.remove()

    expect(axiosMock.mock.calls.length).toBe(0)
  })

  it('should update file when `handleFileSelected` is triggered', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filaname')

    expect(a.vm.value).toBe(null)

    a.vm.handleFileSelected({
      target: {
        files: [
          file
        ]
      }
    })

    expect(a.vm.value).toStrictEqual(file)
  })

  it('should validate when `handleFileSelected` is triggered and `validateOn` contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit|change',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filaname')

    expect(a.vm.validated).toBe(false)

    a.vm.handleFileSelected({
      target: {
        files: [
          file
        ]
      }
    })

    await flushPromises()

    expect(a.vm.validated).toBe(true)
  })

  it('should not validate when `handleFileSelected` is triggered and `validateOn` does not contain "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filaname')

    expect(a.vm.validated).toBe(false)

    a.vm.handleFileSelected({
      target: {
        files: [
          file
        ]
      }
    })

    await flushPromises()

    expect(a.vm.validated).toBe(false)
  })

  it('should throw an error in `uploadTemp` if not in stage 1', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update({
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    })

    expect(a.vm.stage).toBe(2)

    let catchMock = jest.fn()

    expect(catchMock.mock.calls.length).toBe(0)

    a.vm.uploadTemp().catch((e) => { catchMock() })

    await flushPromises()

    expect(catchMock.mock.calls.length).toBe(1)
  })

  it('should abort `uploadTemp` if invalid', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required|min:30'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let axiosMock = jest.fn()

    a.vm.axios.post = axiosMock

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.stage).toBe(1)

    expect(axiosMock.mock.calls.length).toBe(0)

    a.vm.uploadTemp()

    await flushPromises()

    expect(axiosMock.mock.calls.length).toBe(0)
  })

  it('should send file to upload endpoint & update with return value in `uploadTemp`', async () => {
    let form = createForm({
      key: 'aaa',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }

    let axiosMock = jest.fn(() => {
      return {
        data: tmp
      }
    })

    a.vm.axios.post = axiosMock

    let file = new File([''], 'filename')

    a.vm.update(file)

    expect(a.vm.stage).toBe(1)

    expect(axiosMock.mock.calls.length).toBe(0)

    expect(a.vm.value).toStrictEqual(file)

    a.vm.uploadTemp()

    await flushPromises()

    expect(axiosMock.mock.calls.length).toBe(1)

    expect(axiosMock.mock.calls[0][1] instanceof FormData).toBe(true)
    expect(axiosMock.mock.calls[0][1].get('file')).toStrictEqual(file)
    expect(axiosMock.mock.calls[0][1].get('key')).toStrictEqual('aaa')
    expect(axiosMock.mock.calls[0][1].get('path')).toStrictEqual('a')

    expect(a.vm.value).toStrictEqual(tmp)
  })

  it('should set `progress` during `uploadTemp`', async () => {
    let form = createForm({
      key: 'aaa',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

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

    a.vm.axios.post = axiosMock

    let file = new File([''], 'filename')

    a.vm.update(file)
    
    a.vm.uploadTemp()

    await flushPromises()

    expect(a.vm.progress).toBe(80)
    axiosMock.mockRestore()
  })

  it('should set progress to 0 on `uploadTemp` if the response is an error', async () => {
    let form = createForm({
      key: 'aaa',
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let axiosMock = jest.fn((url,data,options) => {})

    a.vm.axios.post = axiosMock

    let file = new File([''], 'filename')

    a.vm.update(file)

    let catchMock = jest.fn()
    
    a.vm.uploadTemp().catch((e) => { catchMock() })

    await flushPromises()

    expect(catchMock.mock.calls.length).toBe(1)
  })

  it('should not call `uploadTemp` in `prepare` if stage is not 1', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let tmp = {
      tmp: 'tmp123',
      originalName: 'filename.jpg'
    }

    a.vm.update(tmp)

    expect(a.vm.validated).toBe(false)

    expect(a.vm.stage).toBe(2)

    a.vm.prepare()

    await flushPromises()

    expect(a.vm.validated).toBe(false)
  })

  it('should call `uploadTemp` in `prepare` if stage is 1', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          rules: 'required',
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.axios.post = jest.fn(() => {
      return {
        data: {
          tmp: 'tmp123',
          originalName: 'filename.jpg'
        }
      }
    })

    a.vm.update(new File([''], 'filename'))

    expect(a.vm.validated).toBe(false)

    expect(a.vm.stage).toBe(1)

    a.vm.prepare()

    await flushPromises()

    expect(a.vm.validated).toBe(true)
  })

  it('should click input element when upload button is clicked in `handleClick`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let clickMock = jest.fn()

    a.vm.$refs.input = {
      click: clickMock
    }

    expect(clickMock.mock.calls.length).toBe(0)

    a.find(`[class="${a.vm.classes.selectButton}"]`).trigger('click')

    await Vue.nextTick()

    expect(clickMock.mock.calls.length).toBe(1)
  })

  it('should not click input element when upload button is clicked & disabled in `handleClick`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let clickMock = jest.fn()

    a.vm.$refs.input = {
      click: clickMock
    }

    expect(clickMock.mock.calls.length).toBe(0)

    a.find(`[class="${a.vm.classes.selectButton}"]`).trigger('click')

    await Vue.nextTick()

    expect(clickMock.mock.calls.length).toBe(0)
  })

  it('should cancel request when `Abort` is clicked', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let cancelMock = jest.fn()

    a.vm.request = {
      cancel: cancelMock
    }

    await Vue.nextTick()

    expect(cancelMock.mock.calls.length).toBe(0)

    a.find(`[class="${a.vm.classes.abortButton}"]`).trigger('click')

    await Vue.nextTick()

    expect(cancelMock.mock.calls.length).toBe(1)
  })

  it('should not cancel request when `Abort` is clicked and request does not exist', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let cancelMock = jest.fn()

    a.vm.request = null

    expect(cancelMock.mock.calls.length).toBe(0)

    a.vm.handleAbort()

    await Vue.nextTick()

    expect(cancelMock.mock.calls.length).toBe(0)
  })
})

describe('File Element Events', () => {
  it('should trigger `change` when a file is selected via input', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.get('input').setValue('')
    a.get('input').trigger('change')

    expect(onChangeMock.mock.calls.length).toBe(1)
  })

  it('should trigger `change` when a file is selected', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filename')

    a.vm.handleFileSelected({
      target: {
        files: [
          file
        ]
      }
    })

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual(file)
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual(null)
  })

  it('should trigger `remove` & `change` when remove button is clicked in stage 1', async () => {
    let onRemoveMock = jest.fn()
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onRemove: onRemoveMock,
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filename')

    a.vm.file = file
    a.vm.update(file)

    await Vue.nextTick()

    expect(a.vm.stage).toBe(1)

    a.find(`[class="${a.vm.classes.removeButton}"]`).trigger('click')

    expect(onRemoveMock.mock.calls.length).toBe(1)
    expect(onRemoveMock.mock.calls[0][0]).toStrictEqual(file)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual(null)
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual(file)
  })

  it('should trigger `remove` & `change` when remove button is clicked in stage 2', async () => {
    let onRemoveMock = jest.fn()
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onRemove: onRemoveMock,
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    let file = new File([''], 'filename')
    let tmp = {
      tmp: 'tmp123',
      originalName: file.name
    }

    a.vm.file = file
    a.vm.update(tmp)

    await Vue.nextTick()

    expect(a.vm.stage).toBe(2)

    a.find(`[class="${a.vm.classes.removeButton}"]`).trigger('click')

    await Vue.nextTick()

    expect(onRemoveMock.mock.calls.length).toBe(1)
    expect(onRemoveMock.mock.calls[0][0]).toStrictEqual(tmp)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual(null)
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual(tmp)
  })

  it('should trigger `remove` & `change` when remove button is clicked in stage 3', async () => {
    let onRemoveMock = jest.fn()
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onRemove: onRemoveMock,
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.axios.post = jest.fn()

    let file = 'filename.jpg'
    
    a.vm.update(file)

    await Vue.nextTick()

    expect(a.vm.stage).toBe(3)

    a.find(`[class="${a.vm.classes.removeButton}"]`).trigger('click')

    expect(onRemoveMock.mock.calls.length).toBe(1)
    expect(onRemoveMock.mock.calls[0][0]).toStrictEqual(file)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual(null)
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual(file)
  })

  it('should trigger `error` event on error', async () => {
    let onErrorMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
          onError: onErrorMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    expect(onErrorMock.mock.calls.length).toBe(0)

    a.vm.handleError('aaa')

    expect(onErrorMock.mock.calls.length).toBe(1)
  })

  it('should throw alert on default `error`', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file',
          auto: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update('filename.jpg')
    a.vm.handleError('aaa')

    expect(window.alert).toBeCalledWith('Couldn\'t upload file: filename.jpg')
  })
})