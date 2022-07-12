import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

const getCanvasBlob = (canvas) => {
  return new Promise(function(resolve, reject) {
    canvas.toBlob((blob) => {
      resolve(blob)
    })
  })
}

describe('FilePreview', () => {
  useElementComponent('file', 'FilePreview', { default: new File(['a'], 'a'), auto: false }, {
    defaultView: 'file'
  })

  describe('rendering', () => {
    it('should render clickable filename', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            auto: false,
            default: 'filename.jpg',
            clickable: true,
            url: 'http://domain.com/'
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FilePreview' }).at(0)

      expect(findAll(slot, 'a').at(0).attributes('href')).toBe('http://domain.com/filename.jpg')
      expect(findAll(slot, 'a').at(0).element.innerHTML).toBe('filename.jpg')
    })

    it('should render plain filename', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            auto: false,
            default: 'filename.jpg',
            clickable: false,
            url: 'http://domain.com/'
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FilePreview' }).at(0)

      expect(slot.html()).toContain('filename.jpg')
    })

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
            view: 'image',
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FilePreview' }).at(0)

      el.vm.update(new File([file], 'filename.jpg'))
      el.vm.base64 = 'data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABmJLR0QA/wD/AP+gvaeTAAAADklEQVQYlWNgGAWDEwAAAZoAARbK02kAAAAASUVORK5CYII='

      await flushPromises()

      expect(findAll(slot, 'img').at(0).attributes('src')).toStrictEqual(slot.vm.preview)
    })

    it('should render uploaded image', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            auto: false,
            default: 'filename.jpg',
            clickable: true,
            url: 'http://domain.com/',
            view: 'gallery',
          }
        }
      })

      let el = findAllComponents(form, { name: 'FileElement' }).at(0)
      let slot = findAllComponents(el, { name: 'FilePreview' }).at(0)

      expect(findAll(slot, 'a').at(0).html()).toContain('filename.jpg')
      expect(findAll(slot, 'a').at(0).attributes('href')).toBe('http://domain.com/filename.jpg')
      expect(findAll(slot, 'img').at(0).attributes('src')).toStrictEqual(slot.vm.preview)
    })
  })
})