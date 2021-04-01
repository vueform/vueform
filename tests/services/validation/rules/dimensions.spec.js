import flushPromises from 'flush-promises'
import { createForm, destroy } from 'test-helpers'

const getCanvasBlob = (canvas) => {
  return new Promise(function(resolve, reject) {
    canvas.toBlob((blob) => {
      resolve(blob)
    })
  })
}

const testDimensions = async (el, width, height, expected) => {
  const canvas = document.createElement('canvas')

  canvas.width = width
  canvas.height = height

  let file = await getCanvasBlob(canvas)
  el.update(new File([file], 'file.jpg'))
  await el.validate()
  expect(el.invalid).toBe(!expected)

  file = null
}

describe('Dimensions Rule', () => {
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

    await testDimensions(el, 100, 200, false)
    await testDimensions(el, 200, 200, true)
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

    await testDimensions(el, 100, 200, true)
    await testDimensions(el, 200, 200, true)
    await testDimensions(el, 201, 200, false)
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

    await testDimensions(el, 100, 100, false)
    await testDimensions(el, 100, 200, true)
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

    await testDimensions(el, 100, 100, true)
    await testDimensions(el, 100, 200, true)
    await testDimensions(el, 100, 201, false)
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

    await testDimensions(el, 199, 100, false)
    await testDimensions(el, 200, 100, true)
    await testDimensions(el, 201, 100, false)
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

    await testDimensions(el, 100, 199, false)
    await testDimensions(el, 100, 200, true)
    await testDimensions(el, 100, 201, false)
  })

  it('should be valid if ratio match when ratio 3/2', async () => {
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

    await testDimensions(el, 3, 2, true)
    await testDimensions(el, 3000, 2000, true)
    await testDimensions(el, 2, 3, false)
    await testDimensions(el, 2000, 3000, false)

    destroy(form)
  })

  it('should be valid if ratio match when ratio 2/3', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:ratio=2/3',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    await testDimensions(el, 2, 3, true)
    await testDimensions(el, 2000, 3000, true)
    await testDimensions(el, 3, 2, false)
    await testDimensions(el, 3000, 2000, false)

    destroy(form)
  })

  it('should be valid if ratio match when ratio 0.25', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:ratio=0.25',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    await testDimensions(el, 10, 20, false)
    await testDimensions(el, 1000, 2000, false)
    await testDimensions(el, 10, 40, true)
    await testDimensions(el, 1000, 4000, true)

    destroy(form)
  })

  it('should be valid if ratio match when ratio 4', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'dimensions:ratio=4',
          auto: false,
        },
      }
    })

    let el = form.vm.el$('el')

    await testDimensions(el, 10, 40, false)
    await testDimensions(el, 1000, 4000, false)
    await testDimensions(el, 40, 10, true)
    await testDimensions(el, 4000, 1000, true)

    destroy(form)
  })
})