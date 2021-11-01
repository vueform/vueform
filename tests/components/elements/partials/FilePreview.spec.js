import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('FilePreview', () => {
  useElementComponent('file', 'FilePreview', { default: new File(['a'], 'a'), auto: false })

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
  })
})