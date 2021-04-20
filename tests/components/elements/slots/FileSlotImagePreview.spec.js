import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

const getCanvasBlob = (canvas) => {
  return new Promise(function(resolve, reject) {
    canvas.toBlob((blob) => {
      resolve(blob)
    })
  })
}

describe('FileSlotImagePreview', () => {
  useElementComponent('file', 'FileSlotImagePreview', { auto: false, image: true }, {
    execute: async (el) => {
      const canvas = document.createElement('canvas')

      canvas.width = 10
      canvas.height = 10

      let file = await getCanvasBlob(canvas)

      el.update(file)
    }
  })

  describe('rendering', () => {
    it('should render preview image', async () => {
      const canvas = document.createElement('canvas')

      canvas.width = 10
      canvas.height = 10

      let file = await getCanvasBlob(canvas)

      let form = createForm({
        schema: {
          el: {
            type: 'file',
            auto: false,
            image: true,
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FileSlotImagePreview' }).at(0)

      el.vm.update(new File([file], 'filename.jpg'))
      el.vm.base64 = 'data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAADklEQVQYlWNgGAWDEwAAAZoAARbK02kAAAAASUVORK5CYII='

      await flushPromises()

      expect(findAll(slot, 'span').at(0).html()).toContain('filename.jpg')
      expect(findAll(slot, 'img').at(0).attributes('src')).toStrictEqual(slot.vm.preview)
    })

    it('should render uploaded image', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            auto: false,
            image: true,
            default: 'filename.jpg',
            clickable: true,
            url: 'http://domain.com/'
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FileSlotImagePreview' }).at(0)

      expect(findAll(slot, 'a').at(0).html()).toContain('filename.jpg')
      expect(findAll(slot, 'a').at(0).attributes('href')).toBe('http://domain.com/filename.jpg')
      expect(findAll(slot, 'img').at(0).attributes('src')).toStrictEqual(slot.vm.preview)
    })
  })
})