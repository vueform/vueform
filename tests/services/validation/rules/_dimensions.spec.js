import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change } from 'test-helpers'

jest.useFakeTimers()

const getCanvasBlob = (canvas) => {
  return new Promise(function(resolve, reject) {
      c(canvas.toBlob)
    canvas.toBlob(function(blob) {
      resolve(blob)
    })
  })
}

describe('Dimensions Rule', () => {
  // const originalImage = window.Image

  // beforeEach(() => {
  //   window.Image = class {
  //     constructor() {
  //       setTimeout(() => {
  //         this.onload({target:{
  //           width: this.src.name.split('x')[0],
  //           height: this.src.name.split('x')[1],
  //         }})
  //       }, 1)
  //     }
  //   }
  // })

  // afterEach(() => {
  //   window.Image = originalImage
  // })

  it('should be valid if empty', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:min_width=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.validate()
    await flushPromises()
    expect(el.invalid).toBe(false)
  })

  it('should be valid if min_width match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:min_width=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)

    el.update(new File(['file.png'], '200x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)
  })

  it('should be valid if max_width match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:max_width=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '200x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '201x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if min_height match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:min_height=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)

    el.update(new File(['file.png'], '100x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)
  })

  it('should be valid if max_height match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:max_height=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '100x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '100x201'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if width match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:width=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)

    el.update(new File(['file.png'], '200x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '201x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if height match', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:height=200',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)

    el.update(new File(['file.png'], '100x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '100x300'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if ratio match when 3/2', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:ratio=3/2',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '150x100'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '300x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '200x300'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })

  it('should be valid if ratio match when 0.66', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:ratio=0.66',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    el.update(new File(['file.png'], '100x150'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '200x300'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(false)

    el.update(new File(['file.png'], '300x200'))
    await flushPromises()
    jest.advanceTimersByTime(1)
    await flushPromises()
    expect(el.invalid).toBe(true)
  })
})