import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'
import flushPromises from 'flush-promises'
import Validator from '../../../src/services/validation/validator'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

const Vue = createLocalVue()

let conosleErrorSpy

beforeEach(() => {
  conosleErrorSpy = jest.spyOn(global.console, 'error')

  conosleErrorSpy.mockImplementation(() => {
    error: () => {}
  })

  window.alert = (text) => {  }
})

afterEach(() => {
  conosleErrorSpy.mockRestore()
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

    expect(a.html()).toContain(a.vm.classes.selectFileButton)
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

    a.vm.$props.embed = true

    await Vue.nextTick()

    expect(a.find('input[type="file"]').exists()).toBe(false)
    expect(a.html()).not.toContain(a.vm.classes.selectFileButton)
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

    expect(a.find(`a[class="${a.vm.classes.uploadTempButton}"]`).exists()).toBe(false)

    a.vm.update(new File([''], 'filename'))

    await Vue.nextTick()

    expect(a.find(`a[class="${a.vm.classes.uploadTempButton}"]`).exists()).toBe(true)
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

  it('should throw an error for `stage` if value is an unknown format', () => {
    let form = createForm({
      schema: {
        a: {
          type: 'file'
        }
      }
    })

    let a = form.findAllComponents({ name: 'FileElement' }).at(0)

    a.vm.update(['a'])

    expect(() => {
      a.vm.stage
    }).toThrowError()
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

    a.vm.$props.embed = true
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

    a.vm.$props.embed = true

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

    a.vm.$props.embed = true

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

    a.vm.$props.embed = true

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